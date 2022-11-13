import React, { useContext } from 'react';

import foods from '../data/foods';
import styles from './CartItem.module.css';
import CartContext from '../../Context/cart-context';
import Increment from './Increment';

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const items = ctx.cartItems;
  const foodName = foods.filter((item) => props.id === item.id)[0].name;
  const foodPrice = parseInt(
    foods.filter((item) => props.id === item.id)[0].price
  );
  const foodQuant = parseInt(
    items.filter((item) => props.id === item.id)[0].quant
  );
  const foodAmount = foodPrice * foodQuant;
  // props.foodAmount(foodAmount);

  return (
    <>
      <section className={styles['cart-item']}>
        <div>
          <h3 className={styles['food-name']}>{foodName}</h3>
          <p className={styles['food-price']}>₹{foodPrice}</p>
        </div>
        <div className={styles['right-div']}>
          <div className={styles['mult-div']}>
            <p className={styles['quant-div']}>x{foodQuant}</p>
            <Increment sym={'-'} id={props.id} />
            <Increment sym={'+'} id={props.id} />
          </div>
          <h3 className={styles['food-amount']}>₹{foodAmount}</h3>
        </div>
      </section>
    </>
  );
};

export default CartItem;
