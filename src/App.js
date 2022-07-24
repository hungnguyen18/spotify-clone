import { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';

import { setClientToken } from './api/axiosClient';
import Content from './layout/Content';
import Player from './layout/Player';
import Sidebar from './layout/Sidebar';
import Login from './pages/Auth/Login';

function App() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        const hash = window.location.hash;
        window.location.hash = '';

        if (!token && hash) {
            const _token = hash.split('&')[0].split('=')[1];

            window.localStorage.setItem('token', _token);
            setToken(_token);

            setClientToken(_token);
        } else {
            setToken(token);

            setClientToken(token);
        }
    }, []);

    return (
        <Router>
            <div className="App">
                {!token ? (
                    <Login />
                ) : (
                    <>
                        <div className="app__container">
                            <Row>
                                <Col xl={4} md={6} span={0}>
                                    <Sidebar />
                                </Col>
                                <Col xl={20} md={18} span={24}>
                                    <Content />
                                </Col>
                            </Row>

                            <div className="app__player">
                                <Player token={token} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Router>
    );
}

export default App;
