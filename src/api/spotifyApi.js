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
    getPlaylistItems: (id) => {
        const url = `/playlists/${id}/tracks`;
        return axiosClient.get(url);
    },
    getCurrentPlaying: () => {
        const url = `me/player/currently-playing`;
        return axiosClient.get(url);
    },
    getMyPodcasts: () => {
        const url = `me/shows`;
        return axiosClient.get(url);
    },
    getMyEpisodesLiked: (offset, limit) => {
        const url = `me/episodes?offset=${offset}&limit=${limit}`;
        return axiosClient.get(url);
    },
    getFollowedArtists: () => {
        const url = `me/following?type=artist`;
        return axiosClient.get(url);
    },
    getMyAlbums: () => {
        const url = `me/albums`;
        return axiosClient.get(url);
    },
};

export default spotifyApi;
