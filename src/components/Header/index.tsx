import React from 'react';
import UserPhoto from '../../img/userphoto.png'

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <div className="actions-container">
                <div className="filter-container">
                    <input type="text" className="filter-input" />
                    <i className="icon icon-search"></i>
                </div>
                <div className="notification-container">
                    <i className="icon icon-notification"></i>
                </div>
                <div className="user-info">
                    <span className="name">Matheus Borges</span>
                    <div className="photo-moldure">
                        <div className="photo">
                            <img src={UserPhoto} alt="Nome do usuário" />
                        </div>
                    </div>
                </div>
            </div>
            
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;