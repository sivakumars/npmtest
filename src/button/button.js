import React from 'react';
import buttonStyle from './button.scss';

export const Button = ({ id, state, name, onClick, type, variant, color, classes, children, autoFocus }) => {
    console.log(autoFocus);
    let className = `${buttonStyle.btn} ${variant ? buttonStyle[variant] : ''} ${color ? buttonStyle[color] : ''} ${classes ? classes : ''}`.toString().trim();
    return (
        <button
            name={name && name.toString().replace(/\s/g, '')}
            disabled={state === 'disabled' || state === 'loading'}
            onClick={onClick}
            type={type}
            id={id}
            className={className}
            autoFocus={autoFocus}
        >
            {children}
            {(state === 'loading') ? <span>...</span> : ''}
        </button>
    )
}