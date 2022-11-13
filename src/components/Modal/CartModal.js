import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import Card from '../UI/Card';
import Button from '../UI/Button';
import CartItem from './CartItem';
import CartContext from '../../Context/cart-context';
import styles from './CartModal.module.css';

const CartModal = (props) => {
  const ctx = useContext(CartContext);
  const cartItems = ctx.cartItems;
  const totalAmount = ctx.totalAmount;

  let items = cartItems.map((item) => {
    return <CartItem key={item.id} id={item.id} quant={item.quant} />;
  });
  if (items.length === 0) {
    items = (
      <>
        <p>No Food Added. Please add food to Cart!</p>
      </>
    );
  }

  const Backdrop = () => {
    return <div className={styles['backdrop']} onClick={props.onClose}></div>;
  };

  const Modal = (props) => {
    return (
      <Card className={styles['cart-modal']}>
        <h2 className={styles['cart-title']}>Checkout</h2>
        <div className={styles['scroll-div']}>{items}</div>
        <div className={styles['line-break']} />
        <div className={styles['total-div']}>
          <h3>Total Amount</h3>
          <h3>₹{totalAmount}</h3>
        </div>

        <div className={styles['button-div']}>
          <Button className={styles['close-button']} onClick={props.onClose}>
            Close
          </Button>
          <Button className={styles['order-button']} onClick={foodOrderHandler}>
            Order
          </Button>
        </div>
      </Card>
    );
  };

  const foodOrderHandler = () => {
    console.log('ORDERING!!');
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal onClose={props.onClose} />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default CartModal;
