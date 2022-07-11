import React from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search__container')}>
            <SearchOutlined className={cx('search__icon')} />

            <input
                type="text"
                className={cx('search__input')}
                placeholder="Search..."
            />
        </div>
    );
}

export default Search;
