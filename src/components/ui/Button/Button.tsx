'use client';

import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface ButtonProps {
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    children?: React.ReactNode;
    loading?: boolean;
    href?: string; // Link or <a>
    to?: string; // open external link
    type?: 'button' | 'submit' | 'reset' | undefined;
    className?: string;
    primary?: boolean;
    search?: boolean;
    login?: boolean;
    medium?: boolean;
    small?: boolean;
    active?: boolean;
    resize?: boolean;
    hover?: boolean;
    onClick?: () => void;
}

export default function Button({
    rightIcon,
    leftIcon,
    children,
    loading,
    href,
    to,
    type,
    className,
    primary,
    search,
    login,
    medium,
    small,
    active,
    resize,
    hover,
    onClick,
}: ButtonProps) {
    const pathname = usePathname();
    const isActive = href === pathname;

    const baseClasses =
        'inline-flex items-center justify-center gap-1.5 px-4 py-1.5 h-10 rounded-[10px] border-2 border-primary bg-transparent cursor-pointer transition-all duration-[350ms] ease-in-out';

    const hoverClasses = hover ? 'hover:bg-primary border border-primary' : '';
    const activeClasses = isActive || active ? 'bg-primary ' : '';

    const iconBaseClasses = 'flex items-center transition-all duration-[350ms] ease-in-out';
    const iconColorClasses = isActive || active ? 'text-white' : 'text-primary';
    const iconHoverClasses = hover ? 'group-hover:text-white' : '';

    const titleBaseClasses = 'font-medium whitespace-nowrap transition-all duration-[350ms] ease-in-out';
    const titleColorClasses = isActive || active ? 'text-white' : 'text-primary';
    const titleHoverClasses = hover ? 'group-hover:text-white' : '';

    const classes = `${baseClasses} ${hoverClasses} ${activeClasses} group ${className || ''}`.trim();

    const renderContent = () => {
        if (loading) {
            return (
                <div className={`${iconBaseClasses} ${iconColorClasses} ${iconHoverClasses}`}>
                    <Loader2 className="animate-spin w-7 h-7" />
                </div>
            );
        }

        return (
            <>
                {rightIcon && (
                    <div className={`${iconBaseClasses} ${iconColorClasses} ${iconHoverClasses}`}>{rightIcon}</div>
                )}
                <div className={`${titleBaseClasses} ${titleColorClasses} ${titleHoverClasses}`}>{children}</div>
                {leftIcon && (
                    <div className={`${iconBaseClasses} ${iconColorClasses} ${iconHoverClasses}`}>{leftIcon}</div>
                )}
            </>
        );
    };

    if (to) {
        return (
            <Link href={to} className={classes}>
                {renderContent()}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                {renderContent()}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {renderContent()}
        </button>
    );
}
