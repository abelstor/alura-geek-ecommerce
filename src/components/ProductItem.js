import { useContext } from 'react';

import { types } from '../types/types';
import { CartContext } from '../context/cartContext';

import addToCartImage from '../assets/icons/bt_add_to_cart.svg';

export const ProductItem = ({ id, image, name, price }) => {

    const { dispatchCart } = useContext(CartContext);

    const handleAddToCart = () => {
        dispatchCart({
            type: types.addToCart,
            payload: {
                id,
                image,
                name,
                price
            }
        });
    }

    return (
        <div className="productitem">
            <img className="productitem__image" src={image} alt={name} />
            <div className="productitem__card">
                <div className="productitem__item">
                    <p className="productitem__item-name">{name}</p>
                    <p className="productitem__item-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                </div>
                <figure
                    className="productitem__item-button pointer"
                    onClick={handleAddToCart}
                >
                    <img src={addToCartImage} alt="bt add to cart" />
                </figure>
            </div>
            <p className="productitem__item-text">Ver Producto</p>
        </div>
    )
}
