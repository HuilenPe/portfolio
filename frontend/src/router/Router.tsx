import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/PublicPage/HomePage';
import HeroPage from '../pages/PublicPage/HeroPage';

const routes = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
);

export default routes;
