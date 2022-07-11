import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    children,
    icon,
    className,
    outline = false,
    disabled = false,
    onClick,
    to,
    href,
    passProps,
}) {
    let Comp = 'button';

    const classes = cx('wrapper', {
        [className]: className,
        icon,
        outline,
        disabled,
    });

    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listeners when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
