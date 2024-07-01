import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { REACT_APP_AUTH0_REDIRECT_URI } from '../../../variables';
import { UserInfo as UserInfoType } from '../../../types/interfaces/UserInfo';

import { UserInfoTable } from '../UserInfoTable';
import { UserInfoForm } from '../UserInfoForm';
import { Btn, Title } from '../../ui';

export const UserInfo = () => {
    const [userInfo, setUserInfo] = useState<UserInfoType[]>([]);
    const [currentInfo, setCurrentInfo] = useState<UserInfoType | null>(null);
    const [userName, setUserName] = useState('');
    const [isFormShow, setIsFormShow] = useState(false);
    const { logout, user } = useAuth0();

    useEffect(() => {
        if (user) {
            const data = Object.entries(user).map(([key, value]) => ({ id: crypto.randomUUID(), key, value }));

            setUserName(user.name || '');
            setUserInfo(data);
        }
    }, [user]);

    const changeInfo = (info: UserInfoType) => {
        setCurrentInfo(info);
        setIsFormShow(true);
    };

    const removeItem = (currentId: string) => {
        return setUserInfo((prevState) => prevState.filter(({ id }) => id !== currentId));
    };

    const onChangeInfo = (info: UserInfoType) => {
        console.log(info);

        setUserInfo((prevState) => {
            const index = prevState.findIndex(({ id }) => id === info.id);
            prevState.splice(index, 1, info);

            return prevState;
        });
        onReset();
    };

    const onAddInfo = (info: UserInfoType) => {
        setUserInfo((prevState) => [...prevState, info]);
        onReset();
    };

    const onReset = () => {
        setCurrentInfo(null);
        setIsFormShow(false);
    };

    return (
        <div className='w-full pt-20 sm:pt-24'>
            <div className='flex items-center justify-between w-full mb-8 last:mb-0'>
                <Title>Hi, {userName}!</Title>
                <Btn onClick={() => logout({ logoutParams: { returnTo: REACT_APP_AUTH0_REDIRECT_URI } })}>Log Out</Btn>
            </div>

            {!isFormShow ? (
                <UserInfoTable userInfo={userInfo} changeInfo={changeInfo} removeItem={removeItem} />
            ) : (
                <>
                    {currentInfo ? (
                        <UserInfoForm
                            currentInfo={currentInfo}
                            onSubmit={onChangeInfo}
                            onReset={onReset}
                            key={currentInfo.id}
                        />
                    ) : (
                        <UserInfoForm onSubmit={onAddInfo} onReset={onReset} />
                    )}
                </>
            )}

            {!isFormShow && (
                <Btn className='sm:w-full lg:min-w-0' onClick={() => setIsFormShow(true)}>
                    Add Info
                </Btn>
            )}
        </div>
    );
};
