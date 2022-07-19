import React from 'react';
import classNames from 'classnames/bind';

import styles from './Podcasts.module.scss';

const cx = classNames.bind(styles);

function Podcasts() {
    return (
        <div className="container">
            <div className="border--bottom">Podcasts</div>
        </div>
    );
}

export default Podcasts;
