import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios
            .post('http://localhost:3001/login', {
                code,
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch(() => {
                window.location = '/';
            });
    }, [code]);
}
