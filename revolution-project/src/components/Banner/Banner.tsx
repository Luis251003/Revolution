import style from './Banner.module.css'
import img from '../../assets/banner.jpg'
import { Link } from 'react-router-dom'

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
                    <Link to='/catalogo'>Ver Catalogo</Link>
                </div>
            </div>
        </div>
    )       
}

export default Banner