import classNames from 'classnames/bind';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

export interface ButtonProps {
    icon?: React.ReactNode;
    children?: React.ReactNode;
    to?: string;
    href?: string;
    className?: string;
    search?: boolean;
    login?: boolean;
    primary?: boolean;
    resize?: boolean;
    onClick?: () => void;
    medium?: boolean;
    small?: boolean;
}

const Button = ({
    icon,
    children,
    to,
    href,
    className,
    search,
    login,
    primary,
    resize = false,
    onClick,
    medium = false,
    small = false,
}: ButtonProps) => {
    let Comp: React.ElementType = 'button';

    const [active, setActive] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const compProps: any = { onClick };

    const classes = (isActive?: boolean) =>
        cx(
            'button-container',
            {
                search,
                primary,
                login,
                medium,
                small,
                active: isActive,
                resize: resize,
            },
            className,
        );

    if (to) {
        Comp = Link;
        compProps.to = to;
        compProps.className = (navActive: { isActive: boolean }) => {
            setActive(navActive.isActive);
            return classes(navActive.isActive);
        };
    } else if (href) {
        Comp = 'a';
        compProps.href = href;
        compProps.className = classes();
    } else {
        compProps.className = classes();
    }

    return (
        <Comp {...compProps}>
            <div className={cx('button-content')}>
                {icon && (
                    <div className={cx('icon')}>
                        {React.isValidElement(icon)
                            ? React.cloneElement(icon as React.ReactElement<{ active?: boolean }>, { active })
                            : icon}
                    </div>
                )}
                <div className={cx('title')}>{children}</div>
            </div>
        </Comp>
    );
};

export default Button;
