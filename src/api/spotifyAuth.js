const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientID = 'eda06710579b49d0a0d768764ec37158';
const redirectUri = 'http://localhost:3000';
const scopes = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-library-modify',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-library-read',
    'playlist-read-private',
    'user-read-recently-played',
];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;
