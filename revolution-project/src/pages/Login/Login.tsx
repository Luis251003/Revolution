import style from './Login.module.css'
import logo from '../../assets/logo__single.webp'
import useInputState from '../../hooks/useInputState';
import { useState } from 'react';

const Login = ()=>{

    const [isVisible,setIsVisible] = useState(false);

    const { inputs, handleFocus, handleBlur, handleChange } = useInputState({
        email: "",
        password: "",
    });

    const handlePassword = () => setIsVisible(!isVisible);

    return (
        <div className={style.container + " contenedor"}>
            <div className={style.login__container}>
                <div className={style.login__logo}>
                    <img src={logo} alt="" />
                </div>

                <h1 className={style.login__title}>Iniciar Sesion</h1>
                <p className={style.login__info}>Empieza a disfrutar de grandes descuentos que tenemos para ti.</p>

                <form action="" className={style.login__form}>
                    <div className={style.form__group}>
                        <input className={`${style.form__input} ${inputs.email?.isFocused || inputs.email?.value ? style.input__active : ""}`} type="email" name="email" id="email" placeholder='' value={inputs.email.value || ''} onFocus={() => handleFocus('email')} onBlur={() => handleBlur('email')} 
                        onChange={(e) => handleChange("email", e.target.value)}/>
                        <label className={`${style.label}`} htmlFor="email">Email</label>
                    </div>
                    <div className={style.form__group}>
                        <div className={`${style.password__container} ${inputs.password.isFocused || inputs.password.value ? style.input__active : ""}`}>
                            <input className={style.form__input} type={!isVisible ? 'password':'text'} name="password" id="password" placeholder='' value={inputs.password.value || ''} onFocus={() => handleFocus('password')} onBlur={() => handleBlur('password')}
                            onChange={(e) => handleChange("password", e.target.value)}/>
                            <button className={style.password__action} type='button' onClick={handlePassword}><i className={`${'fa-solid fa-eye'}${isVisible ? '-slash':''}`}></i></button>
                        </div>
                        <label className={`${style.label}`} htmlFor="password">Password</label>
                    </div>
                    <div className={style.form__group + ' ' + style.check__container}>
                        <input type="radio" name="captcha" id="captcha"/>
                        <label htmlFor="captcha"><span>Captcha,</span> no soy un robot</label>
                    </div>

                    <div className={style.form__group}>
                        <p>En caso de haber olvidado su contraseña dirigete a <a href="#">Recuperar Contraseña</a></p>
                    </div>

                    <div className={style.form__group + ' '+ style.form__submit__container}>
                        <input type="submit" value="Continuar" />
                    </div>
                </form>

                <p>En el caso que no tengas una cuenta, <a href="#">Registrate</a></p>
            </div>
        </div>
    );
}
export default Login