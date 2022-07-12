import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';

import { BigSearchIcon, ClearSearchIcon } from '../Icon';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    // const [searchResult, setSearchResult] = useState([]);

    const inputRef = useRef();

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <div className={cx('search__container')}>
            <BigSearchIcon className={cx('search__icon')} />

            <input
                ref={inputRef}
                value={searchValue}
                type="text"
                className={cx('search__input')}
                placeholder="Artists, songs, or podcasts"
                onChange={handleChange}
            />

            {searchValue && (
                <div className={cx('search__clear')} onClick={handleClear}>
                    <ClearSearchIcon />
                </div>
            )}
        </div>
    );
}

export default Search;
