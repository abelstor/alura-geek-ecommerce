import geek from '../assets/icons/geek.png';
import logo from '../assets/icons/icon.png';
import alura from '../assets/icons/alura.png';

export const Logo = () => {

    return (
        <div className="logo">
            <div className="logo__brand">
                <img className="logo__brand-icon" src={logo} alt="logo" />
                <img className="logo__brand-geek" src={alura} alt="alura" />
                <img className="logo__brand-geek" src={geek} alt="geek" />
            </div>
        </div>
    )
}
