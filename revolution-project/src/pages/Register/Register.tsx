import style from './Register.module.css'
import logo from '../../assets/logo__single.webp'
import { useState } from 'react';
import useInputState from '../../hooks/useInputState';
import { Link } from 'react-router-dom';


const Register = ()=>{

    const [isVisible,setIsVisible] = useState(false);
    const handlePassword = () => setIsVisible(!isVisible);

    const { inputs, handleFocus, handleBlur, handleChange } = useInputState({
        nombre: "",
        apellido: "",
        email:"",
        password:"",
        dia:"",
        mes:"",
        anio:""
    });

    return (
        <div className={`${style.register__container}`}>
            <div className={`${style.register}`}>
                <div className={`${style.register__header}`}>
                    <img src={logo} alt="logo" className={`${style.logo}`}/>
                    <h2 className={`${style.title}`}>Forma parte de la familia <span>Revolution</span></h2>
                </div>
                <form action="" className={`${style.register__form}`}>
                    <div className={`${style.form__group} ${inputs.nombre.isFocused || inputs.nombre.value ? style.form__group__active:''}`}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name='nombre' id='nombre' value={inputs.nombre.value || ""} onFocus={() => handleFocus('nombre')} onBlur={() => handleBlur('nombre')} onChange={(e) => handleChange("nombre", e.target.value)}/>
                    </div>
                    <div className={`${style.form__group} ${inputs.apellido.isFocused || inputs.apellido.value ? style.form__group__active:''}`}>
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" name='apellido'id='apellido' value={inputs.apellido.value || ""} onFocus={() => handleFocus('apellido')} onBlur={() => handleBlur('apellido')} onChange={(e) => handleChange("apellido", e.target.value)}/>
                    </div>
                    <div className={`${style.form__group} span_2 ${inputs.email.isFocused || inputs.email.value ? style.form__group__active:''}`}>
                        <label htmlFor="email">Correo</label>
                        <input type="email" name='email' id='email' value={inputs.email.value || ""} onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} onChange={(e) => handleChange("email", e.target.value)}/>
                    </div>
                    <div className={`${style.form__group} span_2 ${inputs.password.isFocused || inputs.password.value ? style.form__group__active:''}`}>
                        <label htmlFor="password">Contraseña</label>
                        <div className={`${style.password__container}`}>
                            <input type={!isVisible?'password':'text'} name="password" id='password' value={inputs.password.value || ""} onFocus={() => handleFocus('password')} onBlur={() => handleBlur('password')} onChange={(e) => handleChange("password", e.target.value)}/>
                            <button className={style.password__action} type='button' onClick={handlePassword}><i className={`${'fa-solid fa-eye'}${isVisible ? '-slash':''}`}></i></button>
                        </div>
                    </div>
                    <div className={`${style.error__container} span_2`}>
                        <p><i className="fa-solid fa-x"></i>. Minimo de 8 caracteres</p>
                        <p><i className="fa-solid fa-x"></i>. Mayuscula, minuscula y caracter especial</p>
                    </div>
                    <div className={`${style.date__container} span_2`}>
                        <h3>Fecha de Nacimiento</h3>
                        <div className={`${style.form__group}`}>
                            <div className={`${style.form__group} ${inputs.dia.isFocused || inputs.dia.value ? style.form__group__active:''}`}>
                                <label htmlFor="dia">Día</label>
                                <input type="text" name='dia' id='dia' value={inputs.dia.value || ""} onFocus={() => handleFocus('dia')} onBlur={() => handleBlur('dia')} onChange={(e) => handleChange("dia", e.target.value)}/>
                            </div>
                            <div className={`${style.form__group} ${inputs.mes.isFocused || inputs.mes.value ? style.form__group__active:''}`}>
                                <label htmlFor="mes">Mes</label>
                                <input type="text" name='mes' id='mes' value={inputs.mes.value || ""} onFocus={() => handleFocus('mes')} onBlur={() => handleBlur('mes')} onChange={(e) => handleChange("mes", e.target.value)}/>
                            </div>
                            <div className={`${style.form__group} ${inputs.anio.isFocused || inputs.anio.value ? style.form__group__active:''}`}>
                                <label htmlFor="anio">Año</label>
                                <input type="text" name='anio' id='anio' value={inputs.anio.value || ""} onFocus={() => handleFocus('anio')} onBlur={() => handleBlur('anio')} onChange={(e) => handleChange("anio", e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={style.register__footer}>
                    <div className={style.condiciones__container}>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Estoy de acuerdo con la <a href="#">Politica</a> y con los <a href="#">Terminos y Condiciones</a>.</label>
                    </div>
                    <Link to={'/'} className={style.term__action}>Registrar</Link>
                </div>
            </div>
        </div>
    );
}
export default Register