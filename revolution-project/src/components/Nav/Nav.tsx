import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import './Nav.css'
import { Link } from 'react-router-dom';

interface Props{
    is__white:boolean;
}
const Nav = ({is__white}:Props)=>{

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            const scrollThreshold = window.innerHeight * 0.1;
            setIsScrolled(window.scrollY > scrollThreshold);
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll);
    })

    return (
        <nav className={`nav ${isScrolled || is__white ? ' nav__scrolled':''} `}>
            <div className="nav__content contenedor">
                <div className="nav__logo">
                    <Link to={'/'}><img src={logo} alt="Logo" /></Link>
                </div>
                <ul className="nav__links">
                    <li><Link to={'/catalogo'} className='link'>Ofertas</Link></li>
                    <li><Link to={'/catalogo'} className='link'>Hombres</Link></li>
                    <li><Link to={'/catalogo'} className='link'>Mujeres</Link></li>
                    <li><Link to={'/catalogo'} className='link'>Niños</Link></li>
                </ul>
                <ul className="nav__actions">
                    <li><Link to={'/login'} className='action'><i className='bx bx-user' ></i></Link></li>
                    <li><a href="#" className='action'><i className='bx bx-heart' ></i></a></li>
                    <li><a href="#" className='action'><i className='bx bx-cart-alt'></i></a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;