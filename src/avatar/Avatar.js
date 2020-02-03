import React from 'react';
import AvatarStyles from './Avatar.scss';

export const Avatar = ({ size, theme, children, classes }) => {
    let ClassName = `${AvatarStyles.avatar} ${size ? AvatarStyles[size] : AvatarStyles['sm']} ${theme ? AvatarStyles[theme] : ''} ${classes ? classes : ''}`.toString().trim();
    return (
        <div className={ClassName}>
            {children}
        </div>
    );
}
