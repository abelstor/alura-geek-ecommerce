import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as yup from 'yup';

import { AuthContext } from '../context/authContext';
import { Logo } from '../components/Logo';
import { types } from '../types/types';

export const Login = () => {

    const [error, setError] = useState('');
    const { dispatchUser } = useContext(AuthContext);
    const form = useRef(null);
    const navigate = useNavigate();

    const formValidation = yup.object().shape({
        email: yup.string().email('Correo no válido').required('El correo es requerido'),
        password: yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres')
    });

    const handleLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        formValidation.validate(data).then(valid => {

            if (valid) {
                const action = {
                    type: types.login,
                    payload: { name: data.email }
                }
                dispatchUser(action);
                navigate('/');
            }
        }
        ).catch(err => {
            setError(err.errors[0]);
        });
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
                    </div>
                    {error && <span className="input-message-error">{error}</span>}
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
