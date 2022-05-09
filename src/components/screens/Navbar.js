import logo from '../../assets/icons/icon.png';
import alura from '../../assets/icons/alura.png';
import geek from '../../assets/icons/geek.png';
import search from '../../assets/icons/search.png';

export const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="navbar__brand pointer">
                <img className="navbar__brand-logo" src={logo} alt="logo" />
                <img className="navbar__brand-icons" src={alura} alt="alura" />
                <img className="navbar__brand-icons" src={geek} alt="geek" />
            </div>
            <button className="navbar__login pointer">
                Login
            </button>
            <div className="navbar__search pointer">
                <img className="navbar__search-icon" src={search} alt="search" />
            </div>
        </nav>
    )
}
