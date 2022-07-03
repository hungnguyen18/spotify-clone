import Home from '.././pages/Home';
import Library from '.././pages/Library';
import Favorites from '.././pages/Favorites';
import Trending from '.././pages/Trending';

const pageRoutes = [
    { path: '/', component: Home },
    { path: '/library', component: Library },
    { path: '/favorites', component: Favorites },
    { path: '/trending', component: Trending },
];

export default pageRoutes;
