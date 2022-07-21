import React from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const Popper = React.forwardRef(
    (
        {
            children,
            data,
            handleShowIcon,
            handleHideIcon,
            offset,
            width = '196px',
            placement = 'bottom',
        },
        ref
    ) => {
        const render = (attrs) => (
            <div
                className={cx('popper__body')}
                style={{ width: width }}
                tabIndex="-1"
                {...attrs}
            >
                {data?.map((item) => (
                    <div
                        className={cx('popper__item')}
                        key={item.id}
                        onClick={item.onClick}
                        style={item.styles}
                    >
                        <span>{item.name}</span>
                        {item.icon}
                    </div>
                ))}
            </div>
        );

        return (
            <Tippy
                interactive
                ref={ref}
                trigger="click"
                onShow={handleShowIcon}
                onHide={handleHideIcon}
                offset={offset}
                render={render}
                placement={placement}
            >
                {children}
            </Tippy>
        );
    }
);

export default Popper;
