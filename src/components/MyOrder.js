import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { types } from '../types/types';

import iconClose from '../assets/icons/icon_close.png';

export const MyOrder = ({ id, image, name, price }) => {

    const { dispatchCart } = useContext(CartContext);

    const handleClose = () => {
        dispatchCart({
            type: types.removeFromCart,
            payload: id
        })
    }

    return (
        <div className="shopping-cart">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <p>{name}</p>
            <p>${price}</p>
            <img
                className="pointer"
                onClick={handleClose}
                src={iconClose} alt={iconClose} style={{ width: "18px" }} />
        </div>
    )
}
