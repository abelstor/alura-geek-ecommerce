import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CartContext } from '../context/cartContext';
import { geekItems } from '../helpers/geekItems';
import { useItemById } from '../hooks/useItemById';
import { useSimilarItems } from '../hooks/useSimilarItems';
import { types } from '../types/types';
import { ProductItem } from './ProductItem';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';

export const ProductDetail = () => {

    const { dispatchCart } = useContext(CartContext);

    const { id } = useParams();
    const item = useItemById(id, geekItems);
    const similarItems = useSimilarItems(item, geekItems);

    const handleAddToCart = () => {
        dispatchCart({
            type: types.addToCart,
            payload: item
        });
    }

    return (
        <div className="productdetail">
            <div className="container">
                <div className="productdetail__container">
                    <div className="productdetail__image">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="productdetail__content">
                        <h1 className="productdetail__content-title">{item.name}</h1>
                        <div className="productdetail__cart">
                            <span className="productdetail__content-price">${item.price}</span>
                            <figure
                                className="productitem__item-button pointer"
                                onClick={handleAddToCart}
                            >
                                <img src={addToCartImage} alt="bt add to cart" />
                            </figure>
                        </div>
                        <p className="productdetail__content-description">{item.description}</p>
                    </div>
                </div>
                <div className="productdetail__similar">
                    <h1 className="productdetail__header">Productos Similares</h1>
                    <div className="mainscreen__items">
                        {similarItems.map(item => (
                            <ProductItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
