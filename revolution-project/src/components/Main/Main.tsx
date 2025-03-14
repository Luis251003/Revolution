import style from './Main.module.css'
import img__boy from '../../assets/card-boy.jpg'
import img__girl from '../../assets/card--girl.jpg'
import img__sport from '../../assets/sport.jpg'

import img__calzado01 from '../../assets/calzado--01.png'
import img__calzado02 from '../../assets/calzado--02.png'
import img__calzado03 from '../../assets/calzado--03.png'
import img__calzado04 from '../../assets/calzado--04.png'

import img__running from '../../assets/card--running.jpg'
import img__training from '../../assets/card--sport.jpg'
import img__basket from '../../assets/card--basket.jpg'
import img__casual from '../../assets/card--casual.jpg'
import { Link } from 'react-router-dom'

const Main = ()=>{
    return (
        <main className={"contenedor"}>
            <section className={style.section__oferta + " section"}>
                <div className={style.section__oferta__header}>
                    <p>En todo calzado juvenil</p>
                    <h2>De regreso a clases</h2>
                    <p>25% de descuento</p>
                </div>
                <div className={style.section__oferta__body}>
                    <Link to={'/catalogo'} className={style.section__oferta__card}>
                        <img src={img__boy} alt="" />
                        <p>Hombres</p>
                    </Link>
                    <Link to={'/catalogo'} className={style.section__oferta__card}>
                        <img src={img__girl} alt="" />
                        <p>Mujeres</p>
                    </Link>
                </div>
            </section>
            <section className={style.section__descuento + " section"}>
                <h2><span>Descuentos</span> por temporada</h2>
                <div className={style.section__body}>
                    <div className={style.section__img}>
                        <img src={img__sport} alt="" />
                    </div>
                    <div className={style.section__card__container}>
                        <Link to='/catalogo' className={style.section__card}>
                            <div className={style.card__img}>
                                <img src={img__calzado01} alt="calzado01" />
                            </div>
                            <div className={style.card__info}>
                                <h3>Revolution Sport</h3>
                                <p>Zapatillas Deportivas</p>
                                <p>3 colores</p>
                                <p>$69.99</p>
                            </div>
                        </Link>

                        <Link to='/catalogo' className={style.section__card}>
                            <div className={style.card__img}>
                                <img src={img__calzado02} alt="calzado02" />
                            </div>
                            <div className={style.card__info}>
                                <h3>Revolution School</h3>
                                <p>Zapatillas Escolares</p>
                                <p>2 colores</p>
                                <p>$45.99</p>
                            </div>
                        </Link>

                        <Link to='/catalogo' className={style.section__card}>
                            <div className={style.card__img}>
                                <img src={img__calzado03} alt="calzado03" />
                            </div>
                            <div className={style.card__info}>
                                <h3>Revolution Running</h3>
                                <p>Zapatillas de Carreras</p>
                                <p>3 colores</p>
                                <p>$69.99</p>
                            </div>
                        </Link>

                        <Link to='/catalogo' className={style.section__card}>
                            <div className={style.card__img}>
                                <img src={img__calzado04} alt="calzado04" />
                            </div>
                            <div className={style.card__info}>
                                <h3>Revolutiona Street</h3>
                                <p>Zapatillas Casuales</p>
                                <p>4 colores</p>
                                <p>$54.99</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section className={style.section__categoria + " section"}>
                <h2>Compra por categoria</h2>
                <div className={style.section__card__container}>
                    <Link className={style.section__card} to="/catalogo">
                        <img src={img__training} alt="" />
                        <p>Training</p>
                    </Link>
                    <Link className={style.section__card} to="/catalogo">
                        <img src={img__running} alt="" />
                        <p>Running</p>
                    </Link>
                    <Link className={style.section__card} to="/catalogo">
                        <img src={img__casual} alt="" />
                        <p>Casual</p>
                    </Link>
                    <Link className={style.section__card} to="/catalogo">
                        <img src={img__basket} alt="" />
                        <p>Sport</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}
export default Main;