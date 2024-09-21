import { useAuth0 } from '@auth0/auth0-react';
import { Btn, Title } from '../../ui';

export const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className='fixed top-0 left-0 flex flex-col-reverse md:flex-row items-center justify-center w-full h-full p-5 bg-white'>
            <div className='w-full sm:w-[70%] md:w-[45%] lg:w-[50%] text-center md:text-left'>
                <Title className='mb-6 xl:mb-8 last:mb-0'>
                    Welcome back to <br /> React Auth App
                </Title>

                <Btn onClick={() => loginWithRedirect()} className='m-auto md:m-0'>
                    Log In
                </Btn>
            </div>

            <div className='relative w-full md:w-[55%] lg:w-[50%] h-[50%] sm:h-[56%] md:h-full rounded-3xl overflow-hidden mb-6 md:mb-0 bg-grey'>
                <img
                    src='login.jpg'
                    alt='login_img'
                    className='absolute top-0 left-0 w-full h-full object-cover object-center'
                />
            </div>
        </div>
    );
};
