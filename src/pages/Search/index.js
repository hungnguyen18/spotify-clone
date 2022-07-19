import { Col, Row } from 'antd';
import React from 'react';
import SearchInput from '../../components/SearchInput';

function Search() {
    return (
        <div className="container">
            <div className='border--bottom'>
                <div>
                    <Row>
                        <Col xl={0} md={0} span={24}>
                            <SearchInput />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Search;
