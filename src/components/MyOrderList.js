import { useContext } from 'react';

import { CartContext } from '../context/cartContext';
import { MyOrder } from './MyOrder';
import { priceFormat } from '../helpers/priceFormat';
import arrowLeft from '../assets/icons/flechita.svg';

export const MyOrderList = ({ toggleOrder, setToggleOrder }) => {

  const { cart } = useContext(CartContext);

  const totalCart = cart.cart.reduce((total, item) => total + item.price, 0);

  const handleOrder = () => {
    setToggleOrder(!toggleOrder);
  }

  return (
    <div className="my-order">
      <div className="my-order-container">
        <img
          onClick={handleOrder}
          src={arrowLeft} alt={arrowLeft} style={{ width: "16px" }} className="pointer" />
        <h1 className="title">My order 🛒</h1>
      </div>
      <div className="my-order-content">
        {cart.cart.map(item => (
          <MyOrder key={item.id} {...item} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>{priceFormat(totalCart)}</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </div>
  )
}