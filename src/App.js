import { Col, Row } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Sidebar from './components/Sidebar';
import pageRoutes from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Row>
                    <Col xl={6} md={6} span={0}>
                        <Sidebar />
                    </Col>

                    <Col xl={18} md={18} xs={24}>
                        <Row>
                            <Col xl={24} md={24} xs={24}>
                                <Header />
                            </Col>
                        </Row>

                        <Col>
                            <Routes>
                                {pageRoutes.map((route, index) => {
                                    const Page = route.component;

                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={<Page />}
                                        />
                                    );
                                })}
                            </Routes>
                        </Col>
                    </Col>
                </Row>
            </div>
        </Router>
    );
}

export default App;
