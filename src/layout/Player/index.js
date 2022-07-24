import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './Player.module.scss';
import { dataContext } from '../../utils/DataProvider';

const cx = classNames.bind(styles);

function Player() {
    const idContext = useContext(dataContext);

    console.log(idContext.idTrack);

    return <div className={cx('player__container')}></div>;
}

export default Player;
