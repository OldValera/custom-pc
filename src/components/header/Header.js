import React, { useState } from 'react'
import style from './header.module.scss'
import Nav from '../nav/Nav';
import Logo from '../../Ui/logo/Logo';



const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <header className={style.header}>
            <Logo />
            <Nav />
            <div className={style.header__menu}>
            </div>
        </header>
    )
}

export default Header