import { startTransition, useContext, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';

import { BigSearchIcon, ClearSearchIcon } from '../../../components/Icon';
import { useRef } from 'react';
import { dataContext } from '../../../utils/DataProvider';

const cx = classNames.bind(styles);

function SearchInput() {
    const [searchValue, setSearchValue] = useState('');
    // const [searchResult, setSearchResult] = useState([]);

    const searchContext = useContext(dataContext);

    const inputRef = useRef();

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            startTransition(() => {
                setSearchValue(searchValue);
                searchContext.dataSearch.funcSearch(searchValue);
            });
        }
    };

    const handleClear = () => {
        setSearchValue('');
        searchContext.dataSearch.funcSearch('');
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

export default SearchInput;
