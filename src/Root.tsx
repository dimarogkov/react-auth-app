import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/pages/HomePage';
import { NotFoundPage } from './components/pages/NotFoundPage';

export const Root = () => {
    return (
        <Router basename='/react-auth-app'>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
