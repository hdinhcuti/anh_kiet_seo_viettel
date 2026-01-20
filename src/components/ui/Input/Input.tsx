import React, { InputHTMLAttributes, forwardRef } from 'react';

// The component is now a "dumb" or "presentational" component.
// It has no internal state or validation logic.
// Its appearance and behavior are fully controlled by the props it receives.
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string; // The error message to display. This is the only source of truth for the error state.
    helperText?: string;
    variant?: 'outlined' | 'filled' | 'standard';
    inputSize?: 'sm' | 'md' | 'lg';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    // The 'required' prop is added to explicitly show the asterisk,
    // rather than inferring it from an internal validation object.
    required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            variant = 'outlined',
            inputSize = 'md',
            leftIcon,
            rightIcon,
            className = '',
            disabled,
            required,
            ...props
        },
        ref,
    ) => {
        const sizeClasses = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-5 py-3 text-lg',
        };

        const variantClasses = {
            outlined: 'border-2 bg-transparent focus:border-blue-500',
            filled: 'border-0 border-b-2 bg-gray-100 focus:bg-gray-200 focus:border-blue-500',
            standard: 'border-0 border-b-2 bg-transparent focus:border-blue-500',
        };

        const baseClasses = 'w-full rounded-md transition-all duration-200 outline-none';
        // The error styling is now solely dependent on the presence of the `error` prop.
        const errorClasses = error ? 'border-red-500 focus:border-red-500' : 'border-gray-300';
        const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : '';
        const iconPadding = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '';

        return (
            <div className="w-full">
                {label && (
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}

                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{leftIcon}</div>
                    )}

                    <input
                        ref={ref}
                        disabled={disabled}
                        className={`
                            ${baseClasses}
                            ${sizeClasses[inputSize]}
                            ${variantClasses[variant]}
                            ${errorClasses}
                            ${disabledClasses}
                            ${iconPadding}
                            ${className}
                        `}
                        {...props}
                    />

                    {rightIcon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{rightIcon}</div>
                    )}
                </div>

                {error && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {error}
                    </p>
                )}

                {!error && helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
            </div>
        );
    },
);

Input.displayName = 'Input';
export default Input;
