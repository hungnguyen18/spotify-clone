import { Col, Row } from 'antd';
import Column from 'antd/lib/table/Column';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';

import Sidebar from './components/Sidebar';
import Login from './pages/Auth/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Login />
                {/* <Row>
                    <Col xl={3} span={0}>
                        <Sidebar />
                    </Col>

                    <Col xl={21} md={24} sm={24} span={24}>
                        <Content />
                    </Col>
                </Row> */}
            </div>
        </Router>
    );
}

export default App;
