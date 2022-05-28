import { useReducer } from 'react';

import addToCart from '../assets/icons/bt_add_to_cart.svg';

const initialState = {
    favorites: []
}

const favoriteReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

export const ModelMainScreen = (item) => {

    const { id, image, name, price } = item;

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const addFavorite = () => {
        dispatch({
            type: 'ADD_FAVORITE',
            payload: {
                image,
                name,
                price,
                id
            }
        });
        console.log('favorites', favorites);
    }


    return (
        <div className="modelmainscreen">
            <img className="modelmainscreen__image" src={image} alt={name} />
            <div className="modelmainscreen__card">
                <div className="modelmainscreen__item">
                    <p className="modelmainscreen__item-name">{name}</p>
                    <p className="modelmainscreen__item-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                </div>
                <button
                    className="modelmainscreen__item-button pointer"
                    onClick={() => addFavorite()}
                >
                    <img src={addToCart} alt="bt add to cart" />
                </button>
            </div>
            <p className="modelmainscreen__item-text">Ver Producto</p>
        </div>
    )
}
