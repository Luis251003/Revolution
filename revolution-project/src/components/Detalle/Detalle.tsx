import style from './Detalle.module.css'

import calzado__01 from '../../assets/calzado__detalle__01.png'
import calzado__02 from '../../assets/calzado__detalle__02.png'
import calzado__03 from '../../assets/calzado__detalle__03.png'
import calzado__04 from '../../assets/calzado__detalle__04.png'
import calzado__05 from '../../assets/calzado__detalle__05.png'

import detail__01 from '../../assets/calzado__list__01.png'
import detail__02 from '../../assets/calzado__list__02.png'
import detail__03 from '../../assets/calzado__list__03.png'
import detail__04 from '../../assets/calzado__list__04.png'
import detail__05 from '../../assets/calzado__list__05.png'

const Detalle = () => {

    const handleIndice = (index:number)=>{

        const carrusel = document.querySelector(`.${style.carrusel}`) as HTMLElement;
        let total = index * 100
        if(carrusel){
            carrusel.style.transform = `translateX(-${total}%)`;
        }
    }

    return (
        <section className={`${style.detalle} contenedor`}>
            <div className={style.detalle__ruta}>
                <p><a href="#">Catalogo</a> / Slip-Ins</p>
            </div>
            <div className={style.detalle__container}>
                <div className={style.detalle__img}>
                    <div className={style.detalle__main__img}>
                        <div className={style.carrusel}>
                            <img src={calzado__01} alt="" />
                            <img src={calzado__02} alt="" />
                            <img src={calzado__03} alt="" />
                            <img src={calzado__04} alt="" />
                            <img src={calzado__05} alt="" />
                        </div>
                    </div>
                    <ul className={style.detalle__list__img}>
                        <li onClick={() => handleIndice(0)}><img src={detail__01} alt="" /></li>
                        <li onClick={() => handleIndice(1)}><img src={detail__02} alt="" /></li>
                        <li onClick={() => handleIndice(2)}><img src={detail__03} alt="" /></li>
                        <li onClick={() => handleIndice(3)}><img src={detail__04} alt="" /></li>
                        <li onClick={() => handleIndice(4)}><img src={detail__05} alt="" /></li>
                    </ul>
                </div>
                <div className={style.detalle__main}>
                    <div className={style.detalle__text}>
                        <h2 className={style.detalle__title}>Revolution Contour Foam</h2>
                        <p className={style.detalle__tipo}>Calzado casual para hombre</p>
                        <p className={style.detalle__precio}>$85.00</p>
                    </div>
                    <div className={style.detalle__size}>
                        <p>Select Size</p>
                        <ul className={style.detalle__size__list}>
                            <li><p>38</p></li>
                            <li><p>39</p></li>
                            <li><p>40</p></li>
                            <li><p>41</p></li>
                            <li><p>42</p></li>
                            <li className={style.out__stock}><p>43</p></li>
                            <li className={style.out__stock}><p>44</p></li>
                        </ul>
                    </div>
                    <div className={style.detalle__buttons}>
                        <button type='button' className={style.primary}>Añadir al carro</button>
                        <button type='button' className={style.favorite}>Favoritos <i className="fa-regular fa-heart"></i></button>
                    </div>
                    <div className={style.detalle__opciones}>
                        <p>Opciones de envio:</p>
                        <div className={style.opciones__container}>
                            <div className={style.opciones__card}>
                                <div className={style.card__img}>
                                    <i className="fa-solid fa-store"></i>
                                </div>
                                <div className={style.card__text}>
                                    <h3>En Tienda</h3>
                                    <p>Disponibilidad inmediata</p>
                                </div>
                            </div>
                            <div className={style.opciones__card}>
                                <div className={style.card__img}>
                                    <i className="fa-solid fa-car"></i>
                                </div>
                                <div className={style.card__text}>
                                    <h3>Delivery</h3>
                                    <p>De 3 a 7 días hábiles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.detalle__comentario}>
                        <div className={style.comentario__info}>
                            <h3>Comentarios(44)</h3>
                            <p>Lee las reseñas de nuestros clientes.</p>
                        </div>
                        <a href="#">
                            <ul className={style.comentario__stars}>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star"></i></li>
                                <li><i className="fa-solid fa-star-half-stroke"></i></li>
                                <li><i className="fa-regular fa-star"></i></li>
                            </ul>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Detalle