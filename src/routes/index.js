import Home from '.././pages/Home';
import Library from '.././pages/Library';
import Favorites from '.././pages/Favorites';
import Trending from '.././pages/Trending';
import Search from '../pages/Search';
import Playlist from '../pages/Playlist';

const pageRoutes = [
    { path: '/', component: Home },
    { path: '/favorites', component: Favorites },
    { path: '/library', component: Library },
    { path: '/trending', component: Trending },
    { path: '/search', component: Search },
    { path: '/playlist/:id', component: Playlist },
];

export default pageRoutes;
