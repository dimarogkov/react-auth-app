import { useAuth0 } from '@auth0/auth0-react';
import { Login } from '../../elements/Login';
import { UserInfo } from '../../elements/UserInfo';
import { Loader } from '../../ui';

export const HomePage = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    return (
        <section className='relative w-full h-full max-w-screen-2xl p-5 m-auto'>
            {!isAuthenticated && !isLoading && <Login />}

            {isLoading && <Loader />}

            {isAuthenticated && <UserInfo />}
        </section>
    );
};
