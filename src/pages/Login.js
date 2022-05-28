import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/');
        console.log('Login button clicked');
    }

    return (
        <section className="login__container">
            <h1 className="login__title">Iniciar Sesión</h1>
            <form
                // ref={form}
                className="login__form">
                <div className="input-container">
                    <input
                        type="text"
                        name="email"
                        // value={email}
                        // onChange={handleChange}
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
                        // value={name}
                        // onChange={handleChange}
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
                    // onClick={handleSubmit}
                    className="login__button pointer"
                    onClick={handleClick}
                >
                    Entrar
                </button>
            </form>
        </section>
    )
}
