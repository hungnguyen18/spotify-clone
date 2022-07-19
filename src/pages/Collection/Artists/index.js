import React from 'react';
import classNames from 'classnames/bind';

import styles from './Artists.module.scss';

const cx = classNames.bind(styles);

function Artists() {
    return (
        <div className="container">
            <div className="border--bottom">Artists</div>
        </div>
    );
}

export default Artists;
