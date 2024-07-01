import { useAuth0 } from '@auth0/auth0-react';
import { FaReact } from 'react-icons/fa';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

export const Header = () => {
    const { isAuthenticated } = useAuth0();
    const { pathname } = useLocation();

    console.log(pathname);

    return (
        <header
            className={cn('fixed z-10 top-0 left-0 flex items-center w-full h-16 sm:h-20 shadow-md', {
                'md:shadow-none': !isAuthenticated && pathname === '/',
                'bg-white': isAuthenticated,
            })}
        >
            <div className='relative flex items-center gap-3 w-full max-w-screen-2xl px-5 m-auto'>
                <FaReact className='w-7 sm:w-8 h-7 sm:h-8 text-dark' />
                <span className='font-medium text-lg text-dark'>React Auth App</span>
            </div>
        </header>
    );
};
