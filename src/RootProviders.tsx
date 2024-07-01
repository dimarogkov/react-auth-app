import { Auth0Provider } from '@auth0/auth0-react';
import { REACT_APP_AUTH0_CLIENT_ID, REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_REDIRECT_URI } from './variables';

type Props = {
    children: React.ReactNode;
};

export const RootProviders: React.FC<Props> = ({ children }) => {
    return (
        <Auth0Provider
            domain={REACT_APP_AUTH0_DOMAIN}
            clientId={REACT_APP_AUTH0_CLIENT_ID}
            authorizationParams={{ redirect_uri: REACT_APP_AUTH0_REDIRECT_URI }}
        >
            {children}
        </Auth0Provider>
    );
};
