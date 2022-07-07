import Home from '.././pages/Home';
import Library from '.././pages/Library';
import Favorites from '.././pages/Favorites';
import Trending from '.././pages/Trending';
import Search from '../pages/Search';

const pageRoutes = [
    { path: '/', component: Home },
    { path: '/library', component: Library },
    { path: '/favorites', component: Favorites },
    { path: '/trending', component: Trending },
    { path: '/search', component: Search },
];

export default pageRoutes;
