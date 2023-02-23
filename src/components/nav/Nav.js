import React from 'react';
import style from './nav.module.scss';

const Nav = ({ isMenu }) => {
    return (
        <div className={isMenu ? style.menu__nav : style.nav}>
            <ul>
                <li>
                    <a href='/' >Собрать компьютер</a>
                </li>
                <li>
                    <a href='/'>Пользовательские сборки</a>
                </li>
            </ul>
        </div>
    )
}
export default Nav