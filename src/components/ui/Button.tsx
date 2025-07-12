import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define variant types
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: string;
  iconAlt?: string;
  iconPosition?: 'left' | 'right';
  external?: boolean;
  children: React.ReactNode;
}

// Utility function to combine class names
const cn = (...classes: (string | undefined)[]): string =>
  classes.filter(Boolean).join(' ');

// Generate button classes based on variant and size
const getButtonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string
): string => {
  const baseClasses =
    'group inline-flex items-center gap-2 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:pointer-events-none disabled:opacity-50';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary to-primary-light text-white hover:from-primary-light hover:to-primary hover:shadow-lg hover:shadow-primary/25',
    secondary:
      'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30',
    outline:
      'border border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-white hover:bg-white/10',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-2.5 text-base rounded-lg',
    lg: 'px-8 py-3 text-lg rounded-xl',
  };

  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      icon,
      iconAlt = '',
      iconPosition = 'right',
      external = false,
      children,
      ...props
    },
    ref
  ) => {
    const buttonClasses = getButtonClasses(variant, size, className);

    const content = (
      <>
        {icon && iconPosition === 'left' && (
          <Image
            src={icon}
            alt={iconAlt}
            width={16}
            height={16}
            className="transition-transform group-hover:-translate-x-1"
          />
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <Image
            src={icon}
            alt={iconAlt}
            width={16}
            height={16}
            className="transition-transform group-hover:translate-x-1"
          />
        )}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses}
          >
            {content}
          </a>
        );
      }

      return (
        <Link href={href} passHref legacyBehavior>
          <a className={buttonClasses}>{content}</a>
        </Link>
      );
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps, ButtonSize, ButtonVariant };
