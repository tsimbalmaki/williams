import React from "react";
import s from './Navbar.module.css'

const NavItem = (props) => {
    return (
        <a className={s.links} href={props.href}>{props.text}</a>
    )
}

export default NavItem;