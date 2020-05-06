import './NavItem.css';
import React from 'react';

import { Link } from 'react-router-dom'

function NavItem(props) {
    return (
        <Link to={props.href} className="nav-item">
             <i className={`fa fa-${props.icon}`}></i> {props.title}
        </Link>
    );
}

export default NavItem;
