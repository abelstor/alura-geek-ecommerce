import { useEffect, useReducer } from 'react';

import { AuthContext } from './context/authContext';
import { authReducer } from './context/authReducer';
import { CartContext } from './context/cartContext';
import { cartReducer } from './context/cartReducer';
import { AppRouter } from './router/AppRouter';

import './styles/styles.scss';

const cartInit = () => {
    return JSON.parse(localStorage.getItem('cart')) || { cart: [] };
}

const userInit = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

export const AppEcommerce = () => {

    const [cart, dispatchCart] = useReducer(cartReducer, [], cartInit);
    const [user, dispatchUser] = useReducer(authReducer, {}, userInit);

    useEffect(() => {
        if (!cart) return;
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        if (!user) return;
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        <div basename={"/"}>
            <CartContext.Provider value={{ cart, dispatchCart }}>
                <AuthContext.Provider value={{ user, dispatchUser }}>
                    <AppRouter />
                </AuthContext.Provider>
            </CartContext.Provider>
        </div>
    )
}