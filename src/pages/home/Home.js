import React, { Fragment } from 'react';
import style from './home.module.scss';
import Header from '../../components/header/Header';

const Home = () => {
    return (
        <div className={style.backGround}>
            <div className={style.homeWrapper}>
                <Header />
                <div className={style.home}>
                    <div className={style.home__header}>
                        <h1 className={style.home__header__title}>Конфигуратор компьютера</h1>
                        <p className={style.home__header__subTitle}>Собери компьютер мечты</p>
                        <p className={style.home__header__desc}>Создай свой идеальный ПК – подбери совместимые комплектующие, периферию, подходящее ПО и закажи сборку!</p>
                        <button className={style.home__header__btn}>Собрать компьютер</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home