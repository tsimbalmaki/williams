import React from "react";
import s from './Navbar.module.css'


const Navbar = () => {
    return (
        <div className={s.navbar}>
            <a className={s.links} href="/whoweare">Who We Are</a>
            <a className={s.links} href="/whatwedo">What We Do</a>
            <a className={s.links} href="/patentingprocess">Patenting Process</a>
            <a className={s.links} href="/faq">FAQ</a>
            <a className={s.links} href="/feestructure">Fee Structure</a>
            <a className={s.links} href="/contact">Contact</a>
            <a className={s.links} href="/blog">Blog</a>
            <a className={s.number} href="./#">1-888-357-1068</a>
            <a className={s.btm}href="./#">
                <div className={s.ybtm}>
                    Submit Your Idea Now
                </div>
            </a>
        </div>
    )
}

export default Navbar;