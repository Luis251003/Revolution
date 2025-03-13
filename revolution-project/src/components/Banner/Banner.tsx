import style from './Banner.module.css'
import img from '../../assets/banner.jpg'

const Banner = () =>{
    return (
        <div className={style.banner__container}>
            <div className={style.banner__img__container}>
                <img src={img} alt="banner" />
            </div>
            <div className={style.banner__info + ' contenedor'}>
                <h1 className={style.banner__title}>Persigue tus sueños</h1>
                <p>Cumple tus metas solo con <span className={style.marca}>Revolution</span></p>
                <div className={style.banner__action}>
                    <a href="#">Ver Catálogo</a>
                </div>
            </div>
        </div>
    )       
}

export default Banner