import { Link } from 'react-router-dom';

import { Logo } from '../components/Logo';

export const NotFound = () => {

    return (
        <div className="notfound__container">
            <div className="notfound">
                <Logo />
                <h1 className="notfound__title">
                    Se supone que no deberías estar aquí...
                </h1>
                <Link
                    to="/"
                    className="notfound__redirect"
                >
                    volver al inicio
                </Link>
            </div>
        </div>
    )
}
