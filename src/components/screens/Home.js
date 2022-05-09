import { MainScreen } from "../screens/MainScreen";
import { Footer } from "./Footer";

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
