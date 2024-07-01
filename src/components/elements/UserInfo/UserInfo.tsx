import { useAuth0 } from '@auth0/auth0-react';
import { REACT_APP_AUTH0_REDIRECT_URI } from '../../../variables';
import { Btn, Title } from '../../ui';

export const UserInfo = () => {
    const { logout, user } = useAuth0();

    const getUserData = user && Object.keys(user).map((key) => ({ id: crypto.randomUUID(), [key]: user[key] }));

    return (
        <div className='w-full'>
            <Title className='mb-2 last:mb-0'>Hi, you login to React Auth App !</Title>
            <div className='mb-2 last:mb-0'>{JSON.stringify(getUserData)}</div>
            <Btn onClick={() => logout({ logoutParams: { returnTo: REACT_APP_AUTH0_REDIRECT_URI } })}>Log Out</Btn>
        </div>
    );
};
