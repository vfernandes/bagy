import React from 'react';
import Header from "../Header";

interface MainProps {
    title: string
}

const NavItem: React.FC<MainProps> = (props) => {
    return (
        <section className="content">
            <Header title={props.title} />
            {props.children}
        </section>
    );
}

export default NavItem;