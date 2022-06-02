import { useState } from 'react';

const initCart = {
    cart: [],
};

export const useInitCart = () => {
    const [state, setState] = useState(initCart);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    }

    return { state, addToCart };
}