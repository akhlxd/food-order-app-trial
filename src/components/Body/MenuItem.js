import React, { useContext, useState } from 'react';

import Button from '../UI/Button';
import styles from './MenuItem.module.css';
import CartContext from '../../Context/cart-context';

const MenuItem = (props) => {
  const [amount, changeAmount] = useState(1);
  const cartCtx = useContext(CartContext);
  const price = '₹' + props.price;
  const addItemHandler = () => {
    cartCtx.addItem(props.id, parseInt(amount));
  };
  const amountChangeHandler = (event) => {
    let amt = parseInt(event.target.value);
    changeAmount(amt);
    // console.log(event.target.value);
  };

  return (
    <>
      <div className={styles['menu-item']}>
        <div className={styles['item-desc']}>
          <h3 className={styles['food-name']}>{props.name}</h3>
          <p className={styles['food-desc']}>{props.desc}</p>
          <h3 className={styles['food-price']}>{price}</h3>
        </div>
        <div className={styles['item-amount']}>
          <div className={styles['item-pricing']}>
            <label for={props.id}>Amount</label>
            <input
              name={props.id}
              type="number"
              default="1"
              min="1"
              step="1"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <Button className={styles['add-button']} onClick={addItemHandler}>
            + Add
          </Button>
        </div>
      </div>
      <div className={styles['item-line']}></div>
    </>
  );
};

export default MenuItem;
