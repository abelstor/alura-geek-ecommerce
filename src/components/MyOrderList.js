import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

import { MyOrder } from './MyOrder';
import arrowLeft from '../assets/icons/flechita.svg';

export const MyOrderList = () => {

  const { cart } = useContext(CartContext);

  const totalCart = cart.cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="my-order">
      <div className="my-order-container">
        <img src={arrowLeft} alt={arrowLeft} />
        <h1 className="title">My order</h1>
      </div>
      <div className="my-order-content">

        {cart.cart.map(item => (
          <MyOrder key={item.id} {...item} />
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${totalCart}</p>
        </div>

        <button className="primary-button">
          Checkout
        </button>

      </div>

    </div>
  )
}


/*

*/