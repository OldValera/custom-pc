import React from 'react'
import style from './userConfItem.module.scss'
import pcIng from './../../components/assets/pc.png'
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai'

const UserConfItem = () => {
    return (

        <div className={style.userConfItem}>
            <div>
                <img className={style.userConfItem__img} src={pcIng} alt='pcImg' />
                <div className={style.userConfItem__likeCom}>
                    <div className={style.userConfItem__likeCom__item}>
                        <span className={style.userConfItem__likeCom__item__like} >12</span >
                        <AiOutlineLike className={style.userConfItem__likeCom__item__img} />
                    </div>
                    <div className={style.userConfItem__likeCom__item}>
                        <span>4</span>
                        < AiOutlineComment className={style.userConfItem__likeCom__item__img} />
                    </div>
                </div>

            </div>
            <div className={style.userConfItem__desc}>
                <span className={style.userConfItem__desc__title}>SkyTech Chronos Mini Gaming Computer PC</span>
                <span className={style.userConfItem__desc__date}>Oct 12th, 2021</span>
                <div className={style.userConfItem__charItems}>
                    <div className={style.userConfItem__charItem__wrapp}>
                        <div className={style.userConfItem__charItem}>
                            <span className={style.userConfItem__charItem__grey}> СPU</span>
                            <span className={style}>Core i5 12400f</span>
                        </div>
                        <div>
                            <div className={style.userConfItem__charItem}>
                                <span className={style.userConfItem__charItem__grey}> GPU</span>
                                <span className={style}>Rtx 2060 Super</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.userConfItem__charItem__wrapp}>
                        <div className={style.userConfItem__charItem}>
                            <span className={style.userConfItem__charItem__grey}> Ram</span>
                            <span className={style}>SSD 500gb</span>
                        </div>
                        <div>
                            <div className={style.userConfItem__charItem}>
                                <span className={style.userConfItem__charItem__grey}> Storage</span>
                                <span className={style}>WD 2000GB</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>

    )
}

export default UserConfItem



{/* <img className={style.userConfItem__img} src={pcIng} alt='pcImg' /> */ }
{/* <span className={style.userConfItem__title}>ахуевший компьютер</span> */ }
// <div className={style.UserConfItem__spanRamWrapper}>
//     <span> 16GB RAM</span>
//     <span> 500gb ssd</span>
// </div>
// <div className={style.UserConfItem__spanCgpuWrapper}>
//     <ul>
//         <li><span>CPU</span> <span>core i5-12400f</span>  </li>
//     </ul>
//     <ul>
//         <li><span>GPU</span> <span>Rtx 3060</span>  </li>
//     </ul>
// </div>





{/* <div>
                        <div className={style.userConfItem__charItem}>
                            <span className={`${style.userConfItem__char__cgu} ${style.charSpan}`}> CPU</span>
                            <span className={style}>core i5 s12400f</span>
                        </div>
                        <div className={style.userConfItem__charItem}>
                            <span className={`${style.userConfItem__char__cgu} ${style.charSpan}`}> GPU</span>
                            <span className={style}>core i5 s12400f</span>
                        </div>
                    </div>
                    <div>
                        <div className={style.userConfItem__charItem}>
                            <span className={`${style.userConfItem__char__cgu} ${style.charSpan}`}> RAM</span>
                            <span className={style}>core i5 s12400f</span>
                        </div>
                        <div className={style.userConfItem__charItem}>
                            <span className={`${style.userConfItem__char__cgu} ${style.charSpan}`}> Storage</span>
                            <span className={style}>core i5 s12400f</span>
                        </div>
                    </div> */}