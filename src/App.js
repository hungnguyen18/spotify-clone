import { Col, Row } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';

import Sidebar from './components/Sidebar';

function App() {
    return (
        <Router>
            <div className="App">
                <Row>
                    <Col xl={5} md={5} span={0}>
                        <Sidebar />
                    </Col>

                    <Col xl={19} md={19} xs={24}>
                        <Content />
                    </Col>
                </Row>
            </div>
        </Router>
    );
}

export default App;
