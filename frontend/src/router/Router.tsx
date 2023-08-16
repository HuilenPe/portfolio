import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/PublicPage/HomePage';
import HeroPage from '../pages/PublicPage/HeroPage';



const routes = createBrowserRouter([
    {
        path: "/",
        element: "",
        children: [
            {
                path: "/",
                element: <HeroPage />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
    ]}
])

export default routes;
