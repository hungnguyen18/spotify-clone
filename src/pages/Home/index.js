import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className="container">
            <div className="border--bottom">Home</div>
        </div>
    );
}

export default Home;
