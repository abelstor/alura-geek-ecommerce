import { Footer } from '../containers/Footer';
import { MainScreen } from '../containers/MainScreen';
import { Navbar } from '../containers/Navbar';

export const Home = () => {

    return (
        <>
            <Navbar />
            <div className="home">
                <div className="home__banner">
                    <h1 className="home__banner-title">
                        Febrero Promocional
                    </h1>
                    <p className="home__banner-text">
                        Productos seleccionados con 33% de descuento
                    </p>
                    <button className="home__banner-button pointer">
                        Ver Consolas
                    </button>
                </div>
            </div>
            <MainScreen />
            <Footer />
        </>
    )
}
