import React from 'react';
import buttonStyle from './button.scss';

export const Button = ({ state, text, click, type, name, variant, classes }) => {
    return (
        <button
            name={name}
            disabled={state === 'disabled' || state === 'loading'}
            onClick={click}
            type={type}
            className={`${buttonStyle.btn} ${buttonStyle[variant]}`}>
            {text} {(state === 'loading') ? <span>...</span> : ''}
        </button>
    )
}