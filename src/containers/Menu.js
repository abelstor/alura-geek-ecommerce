import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { types } from '../types/types';
import { AuthContext } from '../context/authContext';
import arrowLeft from '../assets/icons/flechita.svg';

export const Menu = ({ toggle, setToggle }) => {

    const navigate = useNavigate();

    const { user, dispatchUser } = useContext(AuthContext);

    const handleLogout = () => {
        navigate('/login');
        dispatchUser({
            type: types.logout
        });
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return user.logged && (
        <div className="menu">
            <ul>
                <li>
                    <p className="title">My orders</p>
                </li>

                <li>
                    <p>My account</p>
                </li>

                <li className="menu__arrow">
                    <img
                        onClick={handleToggle}
                        src={arrowLeft} alt={arrowLeft} style={{ width: "16px" }} className="pointer" />
                    <p
                        onClick={handleLogout}>
                        Sign out
                    </p>
                </li>
            </ul>
        </div>
    )
}
