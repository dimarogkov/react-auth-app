import { LabelHTMLAttributes, forwardRef } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
    className?: string;
}

export const Label: React.FC<Props> = forwardRef<HTMLLabelElement, Props>(({ className = '', ...props }, ref) => (
    <label ref={ref} {...props} className={`relative block w-full ${className}`} />
));
