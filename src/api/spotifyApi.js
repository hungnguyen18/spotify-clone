import axiosClient from './axiosClient';

const spotifyApi = {
    getMe: () => {
        const url = `me`;
        return axiosClient.get(url);
    },
    getMyPlaylists: () => {
        const url = `me/playlists`;
        return axiosClient.get(url);
    },
    getMyTracksLiked: (limit, offset) => {
        const url = `me/tracks?limit=${limit}&offset=${offset}`;
        return axiosClient.get(url);
    },
    getPlaylist: (id) => {
        const url = `/playlists/${id}`;
        return axiosClient.get(url);
    },
    getCurrentPlaying: () => {
        const url = `me/player/currently-playing`;
        return axiosClient.get(url);
    },
};

export default spotifyApi;
