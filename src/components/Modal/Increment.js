import React, { useContext } from 'react';

import styles from './Increment.module.css';
import CartContext from '../../Context/cart-context';

const Increment = (props) => {
  const ctx = useContext(CartContext);
  //   const items = ctx.cartItems;

  const clickHandler = () => {
    if (props.sym === '+') {
      ctx.addItem(props.id, 1);
    } else {
      ctx.addItem(props.id, -1);
    }
  };

  const sym = props.sym;
  return (
    <>
      <button className={styles['inc-button']} onClick={clickHandler}>
        {sym}
      </button>
    </>
  );
};

export default Increment;
