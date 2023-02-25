import React, { useState } from 'react'
import style from './header.module.scss'
import Nav from '../nav/Nav';
import Logo from '../../Ui/logo/Logo';
import { CgMenuRight, CgClose } from 'react-icons/cg'



const Header = (isModify) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }

    const menuToggle = !menuOpen ? (
        <CgMenuRight onClick={handleMenuOpen} />
    ) : (
        <CgClose onClick={handleMenuOpen} />
    )
    return (
        <header className={style.header}>
            <Logo />
            <Nav />
            <div className={style.header__menu}>
                <div className={style.header__menu__toggle}>{menuToggle}</div>
                <aside className={`${style.menu} ${menuOpen && style.show} `}>
                    <Nav isMenu />
                </aside>
            </div>
        </header>
    )
}

export default Header