import React from 'react';
import style from './userConfig.module.scss';
import UserConfItem from '../userConfItem/UserConfItem.js';
import { Link } from 'react-router-dom';

const UserConfig = () => {
    return (
        <div className={style.Bg}>
            <div className={style.userConf}>
                <div className={style.userConf__header}>
                    <h1 className={style.userConf__header__title}>Конфигурация пользователей</h1>
                    <p>Интересуешься выбором других покупателей? Тогда можешь посмотреть самые популярные модификации, подобранные пользователями на нашем сайте среди огромного ассортимента компонентов!</p>
                    <div className={style.userConf__wrapper}>
                        <div className={style.userConf__pcItems}>
                            <UserConfItem />
                            <UserConfItem />
                            <UserConfItem />
                            <UserConfItem />
                        </div>
                        <Link to='/configs'>
                            <button>Смотреть конфигурации</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserConfig