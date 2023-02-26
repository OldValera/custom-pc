import React, { Fragment, useState } from 'react'
import style from './configs.module.scss'
import Header from '../../components/header/Header'
import { IoIosArrowRoundDown, IoIosArrowRoundUp, } from 'react-icons/io'
import { BsFilterLeft } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import UserConfItem from '../../components/userConfItem/UserConfItem.js'

const Configs = () => {
    const [isOpen, setOpen] = useState(false);
    console.log(isOpen)


    return (
        <div className={style.configs}>
            <div className={style.configs__wrapper}>
                <div className={style.configs__filter}>
                    <button className={style.btn}>Собрать свой ПК</button>
                    <div className={style.configs__filter__header}>
                        <div className={style.configs__filter__header__sort}>
                            <BsFilterLeft className={style.configs__filter__header__sort__filterImg} />
                            <span>SortBy</span>
                        </div>
                        <div className={style.configs__filter__header__askDesc}>
                            <div className={`${style.configs__filter__header__askDesc__item} ${style.grey}`}>
                                <IoIosArrowRoundUp />
                                <span>Ask</span>
                            </div>
                            <div className={style.configs__filter__header__askDesc__item} >
                                <IoIosArrowRoundDown />
                                <span>desc</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.configs__filter__toggle} onClick={() => setOpen(!isOpen)}>
                        <button className={style.configs__filter__toggle__btn}>Popularity</button>
                        <MdKeyboardArrowDown className={style.configs__filter__toggle__dropDown} />
                        {
                            isOpen &&
                            <div className={style.configs__filter__toggle__dropDown__options}>
                                <ul>
                                    <li>По популярности</li>
                                    <li>По дате</li>
                                    <li>По цене</li>
                                    <li>По рейтингу</li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div className={style.configs__pcItems}>
                    <div className={style.configs__inputForm}>
                        <CiSearch className={style.configs__inputForm__icon} />
                        <input placeholder='Поиск сборки'></input>
                    </div>
                    <span className={style.configs__pcItems__count}>найдено 12 сборок</span>
                    <div className={style.configs__pcItems__item}>
                        <UserConfItem />
                        <UserConfItem />
                        <UserConfItem />
                        <UserConfItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Configs




