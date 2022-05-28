import { useRef, useState } from 'react';

export const FooterForm = () => {

    const form = useRef(null);

    const initialValues = { name: '', email: '', message: '' };
    const [formState, setFormState] = useState(initialValues);
    const { name, email, message } = formState;

    const handleChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        }
        console.log('data', data); //TODO: send formState to backend
        setFormState(initialValues);
    }

    return (
        <section className="footerform__container">
            <h1 className="footerform__title">Hable con nosotros</h1>
            <form
                ref={form}
                className="footerform">
                <div className="input-container">
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        id="name"
                        className="input"
                        placeholder="Nombre" />
                    <label
                        className="input-label"
                        htmlFor="name">
                        Nombre
                    </label>
                    <span className="input-message-error">Este campo no es válido</span>
                </div>
                <div className="input-container">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        id="email"
                        className="input"
                        placeholder="Correo" />
                    <label
                        className="input-label"
                        htmlFor="email">
                        Correo
                    </label>
                    <span className="input-message-error">Este campo no es válido</span>
                </div>
                <div className="input-container">
                    <textarea
                        type="text"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        required
                        rows="4"
                        id="message"
                        className="input input-textarea"
                        placeholder="Mensaje" />
                    <label
                        className="input-label label-textarea"
                        htmlFor="message">
                        Escribe tu mensage
                    </label>
                </div>
                <button
                    onClick={handleSubmit}
                    className="footerform__button pointer">
                    Enviar Mensaje
                </button>
            </form>
        </section>
    )
}