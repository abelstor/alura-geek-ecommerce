import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/authContext';
import { CartContext } from '../context/cartContext';
import { MyOrderList } from '../components/MyOrderList';
import { SearchBar } from '../components/SearchBar';
import { SearchIcon } from '../components/SearchIcon';
import { Logo } from '../components/Logo';
import { Menu } from './Menu';

import searchIcon from '../assets/icons/search.png';
import shopCar from '../assets/icons/icon_shopping_cart.svg';

export const Navbar = () => {

    const { user } = useContext(AuthContext);
    const { cart } = useContext(CartContext);

    const [toggle, setToggle] = useState(true);
    const [toggleOrder, setToggleOrder] = useState(false)
    const [searchBar, setSearchBar] = useState(false)

    const items = cart.cart.length;

    const handleToggle = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        if (user.logged) return setToggle(false);
    }, [user])

    const handleSearch = () => {
        setSearchBar(!searchBar);
    }

    return (
        <nav className="navbar">
            <Logo />
            <div className="tooglesearch">
                <SearchBar />
            </div>
            <div onClick={handleSearch}
                className="navbar__search pointer">
                <img className="navbar__search-icon" src={searchIcon} alt="search" />
            </div>
            {searchBar && <SearchIcon searchBar={searchBar} setSearchBar={setSearchBar} />}
            <div className="pointer">
                {toggle && <Menu toggle={toggle} setToggle={setToggle} />}
            </div>
            {
                (user.logged)
                    ?
                    <li className="navbar__email pointer" onClick={handleToggle}> {user.name.slice(0, user.name.indexOf('@'))}
                    </li>
                    :
                    <Link to="login" className="navbar__login"> Login </Link>
            }
            <div className="navbar__shopping pointer"
                onClick={() => setToggleOrder(!toggleOrder)}>
                <img src={shopCar} alt="shopping cart" />
                {items > 0 && <div>{items}</div>}
            </div>
            {toggleOrder && <MyOrderList toggleOrder={toggleOrder}
                setToggleOrder={setToggleOrder} />}
        </nav>
    )
}