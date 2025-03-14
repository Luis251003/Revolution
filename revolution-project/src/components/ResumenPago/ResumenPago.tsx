import styles from './ResumenPago.module.css'

interface props{
    subTotal:number;
    delivery:number;
}

const ResumenPago = ({subTotal,delivery}:props) =>{
    return (
        <div className={styles.resumen}>
            <h2>Resumen</h2>
            <div className={styles.item__container}>
                <div className={styles.item}>
                    <p>Subtotal</p>
                    <p>${subTotal.toFixed(2)}</p>
                </div>
                <div className={styles.item}>
                    <p>Delivery</p>
                    <p>${delivery.toFixed(2)}</p>
                </div>
                <div className={styles.item}>
                    <p>Total</p>
                    <p>${(subTotal + delivery).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}
export default ResumenPago