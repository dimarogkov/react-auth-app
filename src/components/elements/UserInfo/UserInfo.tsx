import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserInfo } from '../../../store/user';
import { REACT_APP_AUTH0_REDIRECT_URI } from '../../../variables';
import { Btn, Title } from '../../ui';

export const UserInfo = () => {
    const { userInfo, setUserInfo } = useUserInfo((state) => state);
    const { logout, user } = useAuth0();

    useEffect(() => {
        user && setUserInfo(user);
    }, [setUserInfo, user]);

    console.log(userInfo);

    return (
        <div className='w-full pt-20 sm:pt-24'>
            <Title className='mb-2 last:mb-0'>Hi, {userInfo?.nickname}!</Title>
            <Btn onClick={() => logout({ logoutParams: { returnTo: REACT_APP_AUTH0_REDIRECT_URI } })}>Log Out</Btn>
        </div>
    );
};
