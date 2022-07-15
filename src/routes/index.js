import Home from '.././pages/Home';
import { Albums, Artists, Playlists, Podcasts } from '.././pages/Collection';
import Favorites from '.././pages/Favorites';
import Trending from '.././pages/Trending';
import Search from '../pages/Search';
import Playlist from '../pages/Playlist';

const pageRoutes = [
    { path: '/', component: Home },
    { path: '/favorites', component: Favorites },
    { path: '/collection/playlists', component: Playlists },
    { path: '/collection/podcasts', component: Podcasts },
    { path: '/collection/artists', component: Artists },
    { path: '/collection/Albums', component: Albums },
    { path: '/trending', component: Trending },
    { path: '/search', component: Search },
    { path: '/playlist/:id', component: Playlist },
];

export default pageRoutes;
