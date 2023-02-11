import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'> Главная </Link>
                <Link to='/about'> О нас </Link>
                <Link to='/contacts'> Контакты </Link>
                
            </nav>
        </header>
    );
};

export default Header;