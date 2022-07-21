import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper({ children, data, handleShowIcon, handleHideIcon, offset }) {
    const render = (attrs) => (
        <div className={cx('popper__body')} tabIndex="-1" {...attrs}>
            {data?.map((item) => (
                <div className={cx('popper__item')} key={item.id}>
                    <span>{item.name}</span>
                    {item.icon}
                </div>
            ))}
        </div>
    );

    return (
        <Tippy
            interactive
            trigger="click"
            onShow={handleShowIcon}
            onHide={handleHideIcon}
            offset={offset}
            render={render}
        >
            {children}
        </Tippy>
    );
}

export default Popper;
