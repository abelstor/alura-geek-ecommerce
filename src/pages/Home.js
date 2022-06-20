import { Link } from 'react-router-dom';
import { MainScreen } from '../containers/MainScreen';

export const Home = () => {

    return (
        <>
            <div className="home">
                <div className="home__banner">
                    <h1 className="home__banner-title">
                        Febrero Promocional
                    </h1>
                    <p className="home__banner-text">
                        Productos seleccionados con 33% de descuento
                    </p>
                    <Link to="/products">
                        <button className="home__banner-button pointer">
                            Ver Consolas
                        </button>
                    </Link>
                </div>
            </div>
            <MainScreen />
        </>
    )
}
