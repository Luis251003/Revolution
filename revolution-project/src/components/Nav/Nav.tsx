import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import './Nav.css'

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
                    <a href="#"><img src={logo} alt="Logo" /></a>
                </div>
                <ul className="nav__links">
                    <li><a href="#" className='link'>Ofertas</a></li>
                    <li><a href="#" className='link'>Hombres</a></li>
                    <li><a href="#" className='link'>Mujeres</a></li>
                    <li><a href="#" className='link'>Niños</a></li>
                </ul>
                <ul className="nav__actions">
                    <li><a href="#" className='action'><i className='bx bx-user' ></i></a></li>
                    <li><a href="#" className='action'><i className='bx bx-heart' ></i></a></li>
                    <li><a href="#" className='action'><i className='bx bx-cart-alt'></i></a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;