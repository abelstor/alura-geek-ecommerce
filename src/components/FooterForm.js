import { useRef, useState } from 'react';
import * as yup from 'yup';

export const FooterForm = () => {

    const form = useRef(null);

    const initialValues = { name: '', email: '', message: '' };
    const [formState, setFormState] = useState(initialValues);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { name, email, message } = formState;

    const formValidation = yup.object().shape({
        name: yup.string().required('El nombre es requerido').min(3, 'El nombre debe tener al menos 3 caracteres'),
        email: yup.string().email('Correo no válido').required('El correo es requerido'),
        message: yup.string().required('El mensaje es requerido').min(10, 'El mensaje debe tener al menos 10 caracteres')
    });

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

        formValidation.validate(data).then(valid => {
            if (valid) {
                setFormState(initialValues);
                setError('');
                setIsSubmitting(true);
            }
        }).catch(err => {
            setError(err.errors[0]);
        });
    }

    return !isSubmitting
        ?
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
                    {error && <span className="input-message-error">{error}</span>}
                </div>
                <button
                    onClick={handleSubmit}
                    className="footerform__button pointer">
                    Enviar Mensaje
                </button>
            </form>
        </section>
        :
        <div style={{ display: "grid", placeItems: "center" }}>
            <h1
                className="footerform__title"
                style={{ padding: "2.5rem" }}>
                Gracias por contactarnos!
            </h1>
        </div>
}