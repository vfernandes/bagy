import React from 'react';
import {NavLink} from 'react-router-dom';

interface NavItemProps{
    icon: string,
    link: string,
    text: string
}

const NavItem: React.FC<NavItemProps> = (props) => {
    return (
        <NavLink to={props.link} className="nav-item" activeClassName="active" exact={true}>
            <i className={`icon icon-${props.icon}`}></i>
            <span className="label">
                {props.text}
            </span>
        </NavLink>
    );
}

export default NavItem;