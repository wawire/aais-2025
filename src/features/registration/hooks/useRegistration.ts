/**
 * useRegistration Hook
 * Manages registration state and API calls
 */

'use client';

import { useState, useCallback } from 'react';
import { trackRegistration } from '@/lib/analytics';
import { createRegistration, updateRegistration } from '../api/registration.api';
import type {
  RegistrationFormData,
  Registration,
  RegistrationError,
} from '../types/registration.types';

interface UseRegistrationOptions {
  onSuccess?: (registration: Registration) => void;
  onError?: (error: RegistrationError) => void;
}

interface UseRegistrationReturn {
  registration: Registration | null;
  isSubmitting: boolean;
  error: RegistrationError | null;
  submitRegistration: (data: RegistrationFormData) => Promise<void>;
  updateRegistrationData: (id: string, data: Partial<RegistrationFormData>) => Promise<void>;
  resetError: () => void;
}

export function useRegistration(options: UseRegistrationOptions = {}): UseRegistrationReturn {
  const { onSuccess, onError } = options;

  const [registration, setRegistration] = useState<Registration | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<RegistrationError | null>(null);

  /**
   * Submit new registration
   */
  const submitRegistration = useCallback(
    async (data: RegistrationFormData) => {
      setIsSubmitting(true);
      setError(null);

      try {
        // Track registration started
        trackRegistration.started(data.packageType);

        // Submit to API
        const response = await createRegistration({ formData: data });

        // Update state
        setRegistration(response.registration);

        // Track registration completed
        trackRegistration.completed(
          data.packageType,
          response.registration.totalAmount
        );

        // Call success callback
        onSuccess?.(response.registration);

        // Redirect to payment if needed
        if (response.paymentUrl) {
          window.location.href = response.paymentUrl;
        }
      } catch (err: any) {
        const registrationError: RegistrationError = {
          message: err.message || 'Failed to submit registration',
          code: err.code,
          field: err.field,
        };

        setError(registrationError);
        onError?.(registrationError);

        // Track error
        console.error('Registration error:', err);
      } finally {
        setIsSubmitting(false);
      }
    },
    [onSuccess, onError]
  );

  /**
   * Update existing registration
   */
  const updateRegistrationData = useCallback(
    async (id: string, data: Partial<RegistrationFormData>) => {
      setIsSubmitting(true);
      setError(null);

      try {
        const updated = await updateRegistration(id, { formData: data });
        setRegistration(updated);
        onSuccess?.(updated);
      } catch (err: any) {
        const registrationError: RegistrationError = {
          message: err.message || 'Failed to update registration',
          code: err.code,
        };

        setError(registrationError);
        onError?.(registrationError);
      } finally {
        setIsSubmitting(false);
      }
    },
    [onSuccess, onError]
  );

  /**
   * Reset error state
   */
  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return {
    registration,
    isSubmitting,
    error,
    submitRegistration,
    updateRegistrationData,
    resetError,
  };
}
