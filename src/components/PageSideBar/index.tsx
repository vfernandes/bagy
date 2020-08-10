import React from 'react';
import Logo from '../../img/logo.svg';
import NavItem from './navitem';
import { NavItemsList } from './navlist'
import { Link } from 'react-router-dom';

const PageSideBar = () => {
    return (
        <aside className="sidebar">
            <div className="logo-container">
                <Link to="/">
                    <img src={Logo} alt="Bagy" className="logo" />
                </Link>
            </div>
            <nav className="principal">
                {NavItemsList.principal.map(prop =>
                    <NavItem link={prop.link} icon={prop.icon} text={prop.text} key={prop.link + prop.text} />
                )}
            </nav>
            <nav className="secondary">
                {NavItemsList.secondary.map(prop =>
                    <NavItem link={prop.link} icon={prop.icon} text={prop.text} key={prop.link + prop.text} />
                )}
            </nav>
        </aside>
    );
}

export default PageSideBar();