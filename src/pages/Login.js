import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/authContext';
import { Logo } from '../components/Logo';
import { types } from '../types/types';

export const Login = () => {

    const { dispatchUser } = useContext(AuthContext);
    const form = useRef(null);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        const action = {
            type: types.login,
            payload: { name: data.email }
        }

        dispatchUser(action);
        navigate('/');
    }

    return (
        <div className="login__container">
            <div className="login">
                <Logo />
                <h1 className="login__title">Inicio de sesión</h1>
                <form
                    ref={form}
                    className="login__form">
                    <div className="input-container">
                        <input
                            type="text"
                            name="email"
                            required
                            autoComplete="off"
                            id="email-login"
                            className="input"
                            placeholder="Correo" />
                        <label
                            className="input-label"
                            htmlFor="email-login">
                            Escriba su correo electrónico
                        </label>
                        <span className="input-message-error">Este campo no es válido</span>
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            name="password"
                            required
                            autoComplete="off"
                            id="password-login"
                            className="input"
                            placeholder="Nombre" />
                        <label
                            className="input-label"
                            htmlFor="password-login">
                            Escriba su contraseña
                        </label>
                        <span className="input-message-error">Este campo no es válido</span>
                    </div>
                    <button
                        className="login__button pointer"
                        onClick={handleLogin}
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}
