import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button/index.js'
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu" >
            <Link to="/">
                <img className="Logo" src={Logo} alt="Darkflix lgo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                    Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;