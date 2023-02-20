import React from 'react';
import style from './nav.module.scss';

const Nav = ({ isMenu }) => {

    const array = [4, 7, 2, 1, 9, 5] // 4,2,1,5,9    4 2 1 7 5 9


    for (let index = 0; index < array.length; index++) {
        for (let index = 0; index < array.length; index++) {
            let box;
            if (array[index] > array[index + 1]) {
                box = array[index + 1]
                array[index + 1] = array[index]
                array[index] = box
            }
        }




    }
    console.log(array)







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