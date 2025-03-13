import { Nav } from '../../components/Indice';
import style from './catalogo.module.css';
import catalogo__01 from '../../assets/catalogo__01.webp'
import catalogo__02 from '../../assets/catalogo__02.jpg'
import catalogo__03 from '../../assets/catalogo__03.jpg'
import catalogo__04 from '../../assets/catalogo__04.jpg'
import catalogo__05 from '../../assets/catalogo__05.jpg'
import catalogo__06 from '../../assets/catalogo__06.jpg'
import catalogo__07 from '../../assets/catalogo__07.webp'
import catalogo__08 from '../../assets/catalogo__08.jpg'

const Catalogo = () =>{
    return (
        <>
            <Nav is__white/>
            <div className={`${style.catalogo}`}>
                <div className={`${style.catalogo__container} contenedor`}>
                    <aside className={`${style.aside}`}>
                        <ul className={`${style.links__container}`}>
                            <li className={`${style.primary__link}`}> 
                                <i className={`${style.link__ico} ${'bx bxs-t-shirt'}`}></i> Tipo de Prenda <i className={`${"fa-solid fa-angle-right"} ${style.arrow}`}></i>
                            </li>
                            <li className={`${style.primary__link}`}> <i className={`${style.link__ico} ${'bx bxs-collection'}`}></i>     Modelo          <i className={`${"fa-solid fa-angle-right"} ${style.arrow}`}></i></li>
                            <li className={`${style.primary__link}`}> <i className={`${style.link__ico} ${'bx bx-dollar'}`}></i>          Precio          <i className={`${"fa-solid fa-angle-right"} ${style.arrow}`}></i></li>
                            <li className={`${style.primary__link}`}> <i className={`${style.link__ico} ${'bx bxs-purchase-tag'}`}></i>  Talla           <i className={`${"fa-solid fa-angle-right"} ${style.arrow}`}></i></li>
                            <li className={`${style.primary__link}`}> <i className={`${style.link__ico} ${'bx bxs-layer'}`}></i>         Material        <i className={`${"fa-solid fa-angle-right"} ${style.arrow}`}></i></li>
                        </ul>
                    </aside>
                    <main>
                        <div className={style.catalogo__header}>
                            <div className={`${style.busqueda__container} span_2`}>
                                <input type="text" placeholder='Ingresar búsqueda'/>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className={`${style.selection__container}`}>
                                <select name="" id="">
                                    <option value="">Mayor o menor</option>
                                    <option value="">Menor a mayor</option>
                                    <option value="">En descuento</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.catalogo__body}>
                            <div className={style.cards__container}>
                                <a href='https://www.skechers.com/skechers-slip-ins-contour-foam---cozy-fit/232619_WTP.html' className={style.card}>
                                    <div className={style.card__img}>
                                        <img src={catalogo__01} alt="" />
                                    </div>
                                    <div className={style.card__text}>
                                        <h3 className={style.card__title} >Revolution Contour Foam</h3>
                                        <p  className={style.card__tipo}  >Calzado Casual</p>
                                        <p  className={style.card__color} >5 colores</p>
                                        <p  className={style.card__precio}>$85.00</p>
                                    </div>
                                </a>
                                <a href='https://www.skechers.com/skechers-slip-ins-relaxed-fit-respected-2.0---hagler/205381_BBK.html' className={style.card}>
                                    <div className={style.card__img}>
                                        <img src={catalogo__03} alt="" />
                                    </div>
                                    <div className={style.card__text}>
                                        <h3 className={style.card__title} >Revolution Respected 2.0</h3>
                                        <p  className={style.card__tipo}  >Botines Formales</p>
                                        <p  className={style.card__color} >3 colores</p>
                                        <p  className={style.card__precio}>$110.00</p>
                                    </div>
                                </a>
                                <a href='https://www.skechers.com/skechers-slip-ins-glide-step-pro/232930_NVY.html' className={style.card}>
                                    <div className={style.card__img}>
                                        <img src={catalogo__05} alt="" />
                                    </div>
                                    <div className={style.card__text}>
                                        <h3 className={style.card__title} >Revolution Glide-Step Pro</h3>
                                        <p  className={style.card__tipo}  >Calzado Deportivos </p>
                                        <p  className={style.card__color} >5 colores</p>
                                        <p  className={style.card__precio}>$90.00</p>
                                    </div>
                                </a>
                                <a href='https://www.skechers.com/skechers-slip-ins-relaxed-fit-expected---cayson/205167_CHAR.html' className={style.card}>
                                    <div className={style.card__img}>
                                        <img src={catalogo__07} alt="" />
                                    </div>
                                    <div className={style.card__text}>
                                        <h3 className={style.card__title} >Revolution Expected - Cayson</h3>
                                        <p  className={style.card__tipo}  >Calzado Slip-Ins</p>
                                        <p  className={style.card__color} >4 colores</p>
                                        <p  className={style.card__precio}>$80.00</p>
                                    </div>
                                </a>
                                <a href='https://www.skechers.com/arch-fit-legend---hamor/254000_NVY.html' className={style.card}>
                                    <div className={style.card__img}>
                                        <img src={catalogo__02} alt="" />
                                    </div>
                                    <div className={style.card__text}>
                                        <h3 className={style.card__title} >Revolution Fit Legend</h3>
                                        <p  className={style.card__tipo}  >Calzado Casual</p>
                                        <p  className={style.card__color} >2 colores</p>
                                        <p  className={style.card__precio}>$85.00</p>
                                    </div>
                                </a>
                                <a href='https://www.skechers.com/skechers-slip-ins-relaxed-fit-pollard---waylon/205333_RDBR.html' className={style.card}>
                                    <div className={style.card__img}>
                                        <img src={catalogo__04} alt="" />
                                    </div>
                                    <div className={style.card__text}>
                                        <h3 className={style.card__title} >Revolution Pollard - Waylon</h3>
                                        <p  className={style.card__tipo}  >Botines Formales</p>
                                        <p  className={style.card__color} >2 colores</p>
                                        <p  className={style.card__precio}>$110.00</p>
                                    </div>
                                </a>
                                <a href='https://www.skechers.com/max-cushioning-propulsion/220509_WBK.html' className={style.card}>
                                    <div className={style.card__img}>
                                        <img src={catalogo__06} alt="" />
                                    </div>
                                    <div className={style.card__text}>
                                        <h3 className={style.card__title} >Revolution Max Propulsion</h3>
                                        <p  className={style.card__tipo}  >Calzado Deportivos</p>
                                        <p  className={style.card__color} >5 colores</p>
                                        <p  className={style.card__precio}>$120.00</p>
                                    </div>
                                </a>
                                <a href='https://www.skechers.com/skechers-slip-ins-relaxed-fit-cyrus---shaw/211008.html' className={style.card}>
                                    <div className={style.card__img}>
                                        <img src={catalogo__08} alt="" />
                                    </div>
                                    <div className={style.card__text}>
                                        <h3 className={style.card__title} >Revolution Cyrus-Shaw</h3>
                                        <p  className={style.card__tipo}  >Calzado Slip-Ins</p>
                                        <p  className={style.card__color} >2 colores</p>
                                        <p  className={style.card__precio}>$80.00</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
export default Catalogo