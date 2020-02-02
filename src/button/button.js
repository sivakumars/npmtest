import React from 'react';
import buttonStyle from './button.scss';

export const Button = ({ id, state, name, onClick, type, variant, theme, className, children, autoFocus }) => {
    console.log(autoFocus);
    let classes = `${buttonStyle.btn} ${variant ? buttonStyle[variant] : ''} ${theme ? buttonStyle[theme] : ''} ${className ? className : ''}`.toString().trim();
    return (
        <button
            name={name && name.toString().replace(/\s/g, '')}
            disabled={state === 'disabled' || state === 'loading'}
            onClick={onClick}
            type={type}
            id={id}
            className={classes}
            autoFocus={autoFocus}
        >
            {children}
            {(state === 'loading') ? <span>...</span> : ''}
        </button>
    )
}