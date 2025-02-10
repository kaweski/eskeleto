import React from 'react';
import './style.scss';
// import Avatar from "../../assets/avatar.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <div className='header__logo'>
                    <span className="header__logo-text">Logo</span>
                </div>
                {/* <img src={Avatar} alt="alt text" className="header__logo" /> */}
            </div>
        </header>
    );
};

export default Header;