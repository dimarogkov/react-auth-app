import { useAuth0 } from '@auth0/auth0-react';
import { Page } from '../../elements/Page';
import { Login } from '../../elements/Login';
import { UserInfo } from '../../elements/UserInfo';
import { Loader } from '../../ui';

export const HomePage = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    return (
        <Page>
            {!isAuthenticated && !isLoading && <Login />}

            {isLoading && <Loader />}

            {isAuthenticated && <UserInfo />}
        </Page>
    );
};
