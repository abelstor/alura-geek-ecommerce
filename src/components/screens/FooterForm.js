
export const FooterForm = () => {

    return (
        <section className="footerform__container">
            <h1 className="footerform__title">Hable con nosotros</h1>
            <form className="footerform">
                <div className="input-container">
                    <input
                        className="input"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Nombre" />
                    <label className="input-label" htmlFor="name">Nombre</label>
                    <span className="input-message-error">Este campo no es válido</span>
                </div>
                <div className="input-container registry__price-container">
                    <input
                        className="input"
                        name="email"
                        id="email"
                        type="text"
                        placeholder="Correo" />
                    <label className="input-label" htmlFor="email">Correo</label>
                    <span className="input-message-error">Este campo no es válido</span>
                </div>
                <div className="input-container registry__description-container">
                    <textarea
                        className="input input-textarea"
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Mensaje" />
                    <label className="input-label label-textarea" htmlFor="message">Escribe tu mensage</label>
                    <span className="input-message-error">Este campo no es válido</span>
                </div>
                <button className="button pointer">Enviar Mensaje</button>
            </form>
        </section>
    )
}