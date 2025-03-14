import { Nav } from "../../components/Indice"
import styles from './Comparacion.module.css'

import img__main from "../../assets/calzado__detalle__01.png"
import img__secondary from "../../assets/catalogo__06.jpg"
import { Link } from "react-router-dom"

const Comparacion = () =>{
    return (
        <>
            <Nav is__white/>
            <section className={`${styles.comparacion} contenedor`}>
                <p><span className={styles.rutas}><a href="#">Tienda</a> / <a href="#">Slip-Ins</a></span> / VS Max Propulsion</p>
                <h1 className={styles.comparacion__title}>Comparacion de producto</h1>
                <div className={styles.comparacion__container}>
                    
                    <div className={`${styles.calzado__main} ${styles.comparacion__card}`}>
                        <div className={styles.comparacion__img}>
                            <img src={img__main} alt="" />
                        </div>
                        <h2 className={styles.main__title}>Revolution Contour Foam</h2>

                        <div className={styles.comparacion__info}>
                            <div className={styles.card}>
                                <p className={styles.card__title}>Precio</p>
                                <p className={styles.card__info}>$85.00</p>
                            </div>
                            <div className={styles.card}>
                                <p className={styles.card__title}>Modelo</p>
                                <p className={styles.card__info}>Casual</p>
                            </div>
                            <div className={styles.card}>
                                <p className={styles.card__title}>Colores</p>
                                <p className={styles.card__info}> 5 diseños</p>
                            </div>
                            <div className={styles.card}>
                                <p className={styles.card__title}>Tallas</p>
                                <ul className={styles.card__size__container}>
                                    <li><p>39</p></li>
                                    <li><p>40</p></li>
                                    <li><p>41</p></li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <p className={styles.card__title}>Valoracion</p>
                                <ul className={styles.card__valoracion}>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star-half-stroke"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.calzado__secondary} ${styles.comparacion__card}`}>
                        <h2 className={styles.secondary__title}>Revolution Max Propulsion</h2>
                        <div className={styles.comparacion__img}>
                            <img src={img__secondary} alt="" />
                        </div>
                        <div className={styles.comparacion__info}>
                            <div className={styles.card}>
                                <p className={styles.card__title}>Precio</p>
                                <p className={styles.card__info}>$120.00</p>
                            </div>
                            <div className={styles.card}>
                                <p className={styles.card__title}>Modelo</p>
                                <p className={styles.card__info}>Deportivo</p>
                            </div>
                            <div className={styles.card}>
                                <p className={styles.card__title}>Colores</p>
                                <p className={styles.card__info}>3 diseños</p>
                            </div>
                            <div className={styles.card}>
                                <p className={styles.card__title}>Tallas</p>
                                <ul className={styles.card__size__container}>
                                    <li><p>40</p></li>
                                    <li><p>41</p></li>
                                    <li><p>42</p></li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <p className={styles.card__title}>Valoracion</p>
                                <ul className={styles.card__valoracion}>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-regular fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                        <Link to={'/detalle'} type="button" className={styles.secondary__button}>Cambiar</Link>
                    </div>
                </div>
            </section>
        </>
    )    
}

export default Comparacion