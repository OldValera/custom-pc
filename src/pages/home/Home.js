import React, { Fragment } from 'react';
import style from './home.module.scss';
import Header from '../../components/header/Header';
import pc from './../../components/assets/pc.png'
import UserConfig from '../../components/userCongis/UserConfig';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Fragment>
            <div className={style.backGround}>
                <div className={style.homeWrapper}>
                    <Header />
                    <div className={style.home}>
                        <div className={style.home__header}>
                            <h1 className={style.home__header__title}>Конфигуратор компьютера</h1>
                            <p className={style.home__header__subTitle}>Собери компьютер мечты</p>
                            <p className={style.home__header__desc}>Создай свой идеальный ПК – подбери совместимые комплектующие, периферию, подходящее ПО и закажи сборку!</p>
                            <Link to='/configs'>
                                <button className={style.home__header__btn}>Собрать компьютер</button>
                            </Link>

                        </div>
                        <div className={style.headerImg}>
                            <img src={pc} alt="pcImg" className={style.headerImg__pc}></img>
                        </div>
                    </div>
                </div>
            </div>
            <UserConfig />
        </Fragment>

    )
}

export default Home