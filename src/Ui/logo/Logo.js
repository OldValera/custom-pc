import React from 'react';
import style from './logo.module.scss';
import logo from '../../components/assets/cpu.png'

const Logo = () => {
    return (

        <div className={style.logo}>
            <img src={logo} alt='logo' className={style.logo__png}></img>
            <span>CUSTOM-PC</span>
        </div>
    )
}

export default Logo