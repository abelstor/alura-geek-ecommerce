import { Link } from 'react-router-dom';

import control from '../assets/icons/icon.png';

export const NotFound = () => {

    return (
        <div className="notfound__container">
            <div className="notfound">
                <img
                    className="notfound__image"
                    src={control} alt="control" />
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
