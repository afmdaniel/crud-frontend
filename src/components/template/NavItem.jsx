import './NavItem.css';
import React from 'react';

function NavItem(props) {
    return (
        <a href={props.href} className="nav-item">
             <i className={`fa fa-${props.icon}`}></i> {props.title}
        </a>
    );
}

export default NavItem;
