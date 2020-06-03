import React from "react";
import s from './Navbar.module.css';
import NavItem from "./NavItem";

const listLinks = [
    {
        text: 'Who We Are',
        href: '/whoweare',
    },
    {
        text: 'What We Do',
        href: '/whatwedo',
    },
    {
        text: 'Patenting Process',
        href: '/patentingprocess',
    },
    {
        text: 'FAQ',
        href: '/faq',
    },
    {
        text: 'Fee Structure',
        href: '/feestructure',
    },
    {
        text: 'Contact',
        href: '/contact',
    },
    {
        text: 'Blog',
        href: '/blog',
    },
    {
        text: 'Blog',
        href: '/blog',
    },
    {
        text: '1-888-357-1068',
        href: '../..#',
    },
]




const Navbar = () => {
    return (
        <div className={s.navbar}>
            {listLinks.map(item => {
                return <NavItem text={item.text} href={item.href}/>
            })}
            <a className={s.btm}href="../..#">
                <div className={s.ybtm}>
                    Submit Your Idea Now
                </div>
            </a>
        </div>
    )
}

export default Navbar;