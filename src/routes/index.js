import Home from '.././pages/Home';
import { Albums, Artists, Playlists, Podcasts } from '.././pages/Collection';
import Search from '../pages/Search';
import Playlist from '../pages/Playlist';

const pageRoutes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/playlist/:id', component: Playlist },
    { path: '/collection/playlists', component: Playlists },
    { path: '/collection/podcasts', component: Podcasts },
    { path: '/collection/artists', component: Artists },
    { path: '/collection/Albums', component: Albums },
];

export default pageRoutes;
