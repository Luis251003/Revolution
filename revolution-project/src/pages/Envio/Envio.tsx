import { Nav, Resumen } from '../../components/Indice'
import styles from './Envio.module.css'

import plin from '../../assets/ico__plin.png'
import yape from '../../assets/ico__yape.png'

const Envio = ()=>{
    return(
        <>
            <Nav is__white/>
            <div className={styles.envio}>
                <div className={`${styles.envio__container} contenedor`}>
                    <div className={styles.descripcion}>
                        <section className={styles.envio__content}>
                            <h2>Opciones de envio</h2>
                            <div className={styles.opciones__container}>
                                <button type='button'><i className="fa-solid fa-truck"></i> Delivery</button>
                                <button type='button'><i className="fa-solid fa-location-dot"></i>En Tienda</button>
                            </div>
                            <form action="" className={styles.form}>
                                <input className={`${styles.input__control}`} type="text" placeholder='Nombre'/>
                                <input className={`${styles.input__control}`}type="text" placeholder='Apellido'/>
                                <input className={`${styles.input__control} span_2`} type="email" placeholder='Correo electronico'/>
                                <input className={`${styles.input__control} span_2`} type="text" placeholder='Dirección'/>
                                <div className={`${styles.form__group} span_2`}>
                                    <select className={`${styles.input__control}`}>
                                        <option value="">Dpto.</option>
                                    </select>
                                    <select className={`${styles.input__control}`}>
                                        <option value="">Provincia</option>
                                    </select>
                                    <select className={`${styles.input__control}`}>
                                        <option value="">Distrito</option>
                                    </select>
                                </div>
                                <input className={`${styles.input__control} span_2`} type="text" placeholder='Teléfono'/>
                            </form>
                        </section>
                        <section className={styles.pagos__content}>
                            <h2>Pagos</h2>
                            <p><i className="fa-solid fa-cash-register"></i> Método de pago</p>
                            <form action="" className={styles.form}>
                                <div className={styles.form__group}>
                                    <input type="radio" name="metodo" id="card" />
                                    <label htmlFor="card"><i className="fa-solid fa-credit-card"></i> Tarjeta de debito / credito</label>
                                </div>
                                <div className={styles.form__group}>
                                    <input type="radio" name="metodo" id="paypal" />
                                    <label htmlFor="paypal"><i className="fa-brands fa-paypal"></i> Paypal</label>
                                </div>
                                <div className={styles.form__group}>
                                    <input type="radio" name="metodo" id="otros" />
                                    <label htmlFor="otros"><img src={plin} alt="" /><img src={yape} alt="" /></label>
                                </div>
                            </form>
                            <form className={styles.pago__card}>
                                <p><i className="fa-solid fa-address-card"></i> Agregar Tarjeta</p>
                                <div className={styles.inputs}>
                                    <input type="text" placeholder='Número'/>
                                    <input type="text" placeholder='MM/YY'/>
                                    <input type="text" placeholder='CVV'/>
                                </div>
                                <div className={styles.form__group}>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="#">Guardar tarjeta</label>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className={styles.detalles}>
                        <Resumen subTotal={205} delivery={10}/>
                        <div className={styles.contacto}>
                            <h3>Contactanos</h3>
                            <div className={styles.cards__container}>
                                <div className={styles.card}>
                                    <div className={styles.card__img}>
                                        <i className="fa-solid fa-store"></i>
                                    </div>
                                    <div className={styles.card__text}>
                                        <h3>Teléfono</h3>
                                        <p>+51 643 2094</p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div className={styles.card__img}>
                                        <i className="fa-solid fa-store"></i>
                                    </div>
                                    <div className={styles.card__text}>
                                        <h3>Correo</h3>
                                        <p>Revolution_peru@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.revision}>
                            <h3>Revision de Pedido</h3>
                            <div className={styles.revision__input}>
                                <input type="checkbox" name="term" id="term" />
                                <label htmlFor="term">Acepto los <a href="#">terminos y condiciones de compra</a>, <a href="#">politica de privacidad</a> y de <a href="#">devolución</a></label>
                            </div>
                        </div>
                        <button type="button">Continuar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Envio