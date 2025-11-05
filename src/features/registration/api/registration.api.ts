/**
 * Registration API
 * All registration-related API calls
 */

import { apiClient } from '@/lib/api/client';
import { ROUTES } from '@/constants/routes';
import type {
  Registration,
  RegistrationApiRequest,
  RegistrationApiResponse,
  PackageInfo,
} from '../types/registration.types';

/**
 * Create a new registration
 */
export async function createRegistration(
  data: RegistrationApiRequest
): Promise<RegistrationApiResponse> {
  const response = await apiClient.post<RegistrationApiResponse>(
    ROUTES.API.REGISTRATION,
    data
  );

  return response.data;
}

/**
 * Get registration by ID
 */
export async function getRegistration(id: string): Promise<Registration> {
  const response = await apiClient.get<Registration>(`${ROUTES.API.REGISTRATION}/${id}`);
  return response.data;
}

/**
 * Update registration
 */
export async function updateRegistration(
  id: string,
  data: Partial<RegistrationApiRequest>
): Promise<Registration> {
  const response = await apiClient.patch<Registration>(
    `${ROUTES.API.REGISTRATION}/${id}`,
    data
  );
  return response.data;
}

/**
 * Cancel registration
 */
export async function cancelRegistration(id: string): Promise<{ message: string }> {
  const response = await apiClient.delete<{ message: string }>(
    `${ROUTES.API.REGISTRATION}/${id}`
  );
  return response.data;
}

/**
 * Get available packages
 */
export async function getPackages(): Promise<PackageInfo[]> {
  const response = await apiClient.get<PackageInfo[]>(`${ROUTES.API.REGISTRATION}/packages`);
  return response.data;
}

/**
 * Verify payment status
 */
export async function verifyPayment(registrationId: string): Promise<{
  status: string;
  message: string;
}> {
  const response = await apiClient.get<{ status: string; message: string }>(
    `${ROUTES.API.REGISTRATION}/${registrationId}/payment-status`
  );
  return response.data;
}

/**
 * Send confirmation email
 */
export async function sendConfirmationEmail(registrationId: string): Promise<{ message: string }> {
  const response = await apiClient.post<{ message: string }>(
    `${ROUTES.API.REGISTRATION}/${registrationId}/send-confirmation`
  );
  return response.data;
}

/**
 * Get user's registrations
 */
export async function getUserRegistrations(): Promise<Registration[]> {
  const response = await apiClient.get<Registration[]>(`${ROUTES.API.REGISTRATION}/my-registrations`);
  return response.data;
}
