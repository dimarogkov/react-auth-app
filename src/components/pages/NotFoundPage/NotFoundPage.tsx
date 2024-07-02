import { BtnLink, Text, Title } from '../../ui';

export const NotFoundPage = () => {
    return (
        <section className='relative w-full max-w-screen-2xl h-screen p-5 m-auto'>
            <div className='w-full pt-20 sm:pt-24'>
                <Title className='mb-4 last:mb-0'>Ooops! Page Not Found</Title>

                <Text className='mb-6 last:mb-0'>
                    This page doesn’t exist or was removed! We suggest you go back to home.
                </Text>

                <BtnLink href='/'>Go Back-Home</BtnLink>
            </div>
        </section>
    );
};
