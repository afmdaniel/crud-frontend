import './Nav.css';
import React from 'react';
import NavItem from './NavItem'

function Nav(props) {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <NavItem href="/" icon="home" title="Home" />
                <NavItem href="/users" icon="users" title="Users" />
            </nav>
        </aside>
    );
}

export default Nav;