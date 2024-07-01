import { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Btn: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => (
    <button
        ref={ref}
        {...props}
        className={cn(
            `flex items-center justify-center w-full sm:w-fit sm:min-w-28 lg:min-w-32 h-10 lg:h-11 font-media px-4 rounded text-white bg-blue transition-opacity duration-300 hover:opacity-80 ${className}`,
            {
                'pointer-events-none bg-grey': props.disabled,
            }
        )}
    />
));
