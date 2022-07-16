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
};

export default spotifyApi;
