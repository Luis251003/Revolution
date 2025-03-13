import styles from './DetalleComparar.module.css'

import calzado__01 from '../../assets/comparacion__01.png'
import calzado__02 from '../../assets/comparacion__02.png'
import calzado__03 from '../../assets/comparacion__03.png'
import calzado__04 from '../../assets/comparacion__04.png'
 
const DetalleComparar = () =>{
    return(
        <section className={`${styles.comparacion}`}>
            <div className={`${styles.comparacion__container} contenedor`}>
                <h2>Productos Similares</h2>
                <p><i className="fa-solid fa-square-check"></i>Seleccione para comparar entre tus favoritos</p>
                <div className={styles.cards__container}>
                    <div className={styles.card}>
                        <div className={styles.card__img}>
                            <img src={calzado__01} alt="" />
                        </div>
                        <div>
                            <h3 className={styles.card__title} >Revolution Glide-Step Pro</h3>
                            <p  className={styles.card__tipo}  >Calzado Deportivos </p>
                            <p  className={styles.card__color} >5 colores</p>
                            <p  className={styles.card__precio}>$90.00</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card__img}>
                            <img src={calzado__02} alt="" />
                        </div>
                        <div>
                            <h3 className={styles.card__title} >Revolution Expected - Cayson</h3>
                            <p  className={styles.card__tipo}  >Calzado Slip-Ins</p>
                            <p  className={styles.card__color} >4 colores</p>
                            <p  className={styles.card__precio}>$80.00</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card__img}>
                            <img src={calzado__03} alt="" />
                        </div>
                        <div>
                            <h3 className={styles.card__title} >Revolution Max Propulsion</h3>
                            <p  className={styles.card__tipo}  >Calzado Deportivos</p>
                            <p  className={styles.card__color} >5 colores</p>
                            <p  className={styles.card__precio}>$120.00</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.card__img}>
                            <img src={calzado__04} alt="" />
                        </div>
                        <div>
                            <h3 className={styles.card__title} >Revolution Cyrus-Shaw</h3>
                            <p  className={styles.card__tipo}  >Calzado Slip-Ins</p>
                            <p  className={styles.card__color} >2 colores</p>
                            <p  className={styles.card__precio}>$80.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
export default DetalleComparar;