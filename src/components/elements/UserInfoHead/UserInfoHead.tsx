import { LogoutOptions } from '@auth0/auth0-react';
import { REACT_APP_AUTH0_REDIRECT_URI } from '../../../variables';
import { Btn, Title } from '../../ui';

type Props = {
    userName: string;
    logout: (options?: LogoutOptions) => Promise<void>;
};

export const UserInfoHead: React.FC<Props> = ({ userName, logout = () => {} }) => {
    return (
        <div className='flex flex-col sm:flex-row sm:items-center justify-between w-full mb-5 md:mb-6 lg:mb-8 last:mb-0'>
            <Title className='mb-3 sm:mb-0 last:mb-0'>Hi, {userName}!</Title>
            <Btn onClick={() => logout({ logoutParams: { returnTo: REACT_APP_AUTH0_REDIRECT_URI } })}>Log Out</Btn>
        </div>
    );
};
