import { Outlet } from 'react-router-dom';
import { Header } from './components/elements/Header';

export const App = () => {
    return (
        <>
            <Header />

            <main className='relative w-full'>
                <Outlet />
            </main>
        </>
    );
};
