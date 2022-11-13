import React, { useState, useContext } from 'react';

import Button from '../UI/Button';
import styles from './Cart.module.css';
import { FaCartArrowDown } from 'react-icons/fa';
import CartModal from '../Modal/CartModal';
import CartContext from '../../Context/cart-context';

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartOpenHandler = () => {
    setIsCartOpen(true);
  };

  const cartCloseHandler = () => {
    setIsCartOpen(false);
  };

  const ctx = useContext(CartContext);
  const items = ctx.cartItems;
  let quantity = 0;
  for (let item of items) {
    quantity += parseInt(item.quant);
  }

  return (
    <>
      {isCartOpen && <CartModal onClose={cartCloseHandler} />}
      <Button className={styles.CartContent} onClick={cartOpenHandler}>
        <FaCartArrowDown style={{ fontSize: '20px' }}></FaCartArrowDown>
        <h3>Your Cart</h3>
        <div className={styles['cart-quantity']}>{quantity}</div>
      </Button>
    </>
  );
};

export default Cart;
