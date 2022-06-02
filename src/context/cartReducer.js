// cartReducer

import { types } from '../types/types';

export const cartReducer = (state, action) => {

    switch (action.type) {

        case types.addToCart:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case types.removeFromCart:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }

        default:
            return state;
    }
}
