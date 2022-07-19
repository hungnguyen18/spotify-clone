import React from 'react';
import classNames from 'classnames/bind';

import styles from './Albums.module.scss';

const cx = classNames.bind(styles);

function Albums() {
    return (
        <div className="container">
            <div className="border--bottom">Albums</div>
        </div>
    );
}

export default Albums;
