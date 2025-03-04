import { HTMLAttributes, ReactNode, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    className?: string;
}

export const Title: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ children, className = '', ...props }, ref) => (
        <h1 ref={ref} {...props} className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-dark ${className}`}>
            {children}
        </h1>
    )
);
