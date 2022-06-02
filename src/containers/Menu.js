import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { types } from '../types/types';
import { AuthContext } from '../context/authContext';

export const Menu = () => {

    const navigate = useNavigate();

    const { user, dispatchUser } = useContext(AuthContext);

    const handleLogout = () => {
        navigate('/login');
        dispatchUser({
            type: types.logout
        });
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

                <li>
                    <p
                        onClick={handleLogout}>
                        Sign out
                    </p>
                </li>
            </ul>
        </div>
    )
}
