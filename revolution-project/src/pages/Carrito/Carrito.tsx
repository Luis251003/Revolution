import { Nav, Resumen } from '../../components/Indice';
import styles from './Carrito.module.css'

import calzado__01 from '../../assets/calzado__detalle__01.png';
import calzado__02 from '../../assets/comparacion__03.png';
import { useCountState } from '../../hooks';
import { Link } from 'react-router-dom';

const Carrito = () =>{

    const count__01 = useCountState();
    const count__02 = useCountState();

    return (
        <>
            <Nav is__white/>
            <div className={`${styles.carrito}`}>
                <div className={`${styles.carrito__container} contenedor`}>
                    <div className={styles.descripcion}>
                        <h2>Carrito de compras</h2>
                        <div className={styles.cards__container}>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={calzado__01} alt="" />
                                    <span className={styles.card__button}>
                                        <button className={styles.btn__menos} onClick={count__01.handleMinus}>
                                            {count__01.count > 1 ? '-' : <i className="fa-regular fa-trash-can"></i>}
                                        </button> 
                                        <p className={styles.number}>{count__01.count}</p> 
                                        <button className={styles.btn__mas} onClick={count__01.handlePlus}>+</button>
                                    </span>
                                </div>
                                <div className={styles.card__info}>
                                    <h3>Revolution Contour Foam</h3>
                                    <p>Calzado Casual</p>
                                    <p>H 40 / M 43</p>
                                    <a href="#">Más detalles</a>
                                </div>
                                <div className={styles.card__precio}>
                                    <p>$85.00</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={calzado__02} alt="" />
                                    <span className={styles.card__button}>
                                        <button className={styles.btn__menos} onClick={count__02.handleMinus}>
                                            {count__02.count > 1 ? '-' : <i className="fa-regular fa-trash-can"></i>}
                                        </button> 
                                        <p className={styles.number}>{count__02.count}</p> 
                                        <button className={styles.btn__mas} onClick={count__02.handlePlus}>+</button>
                                    </span>
                                </div>
                                <div className={styles.card__info}>
                                    <h3>Revolution Max Propulsion</h3>
                                    <p>Calzado Deportivo</p>
                                    <p>H 41/ M 44</p>
                                    <a href="#">Más detalles</a>
                                </div>
                                <div className={styles.card__precio}>
                                    <p>$120.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.detalles}>
                        <Resumen subTotal={205} delivery={10}/>
                        <div className={styles.descuento}>
                            <div className={styles.input__container}>
                                <input type="text" placeholder='Ingresar código de dscto.'/>
                            </div>
                            <Link to={'/envio'} className={styles.descuento__btn} type='button'>Continuar</Link>
                        </div>
                        <div className={styles.pago}>
                            <h2>Métodos de pago</h2>
                            <ul>
                                <li><i className="fa-brands fa-cc-visa"></i></li>
                                <li><i className="fa-brands fa-cc-mastercard"></i></li>
                                <li><i className="fa-brands fa-cc-diners-club"></i></li>
                                <li><i className="fa-brands fa-cc-paypal"></i></li>
                                <li><i className="fa-brands fa-cc-apple-pay"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Carrito