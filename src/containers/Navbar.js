import { Link } from 'react-router-dom';

import { SearchBar } from '../components/SearchBar';
import geek from '../assets/icons/geek.png';
import logo from '../assets/icons/icon.png';
import alura from '../assets/icons/alura.png';
import searchIcon from '../assets/icons/search.png';
import shopCar from '../assets/icons/icon_shopping_cart.svg';

export const Navbar = () => {

    return (
        <nav className="navbar">
            <Link
                to="/"
                className="navbar__brand pointer">
                <img className="navbar__brand-logo" src={logo} alt="logo" />
                <img className="navbar__brand-icons" src={alura} alt="alura" />
                <img className="navbar__brand-icons" src={geek} alt="geek" />
            </Link>
            <SearchBar />
            <button className="navbar__login pointer">
                <Link to="login"> Login </Link>
            </button>
            <div className="navbar__search pointer">
                <img className="navbar__search-icon" src={searchIcon} alt="search" />
            </div>
            <div
                className="navbar__shopping">
                <img src={shopCar} alt="shopping cart" />
                <div>2</div>
            </div>
        </nav>
    )
}
