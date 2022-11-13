import React, { useState } from 'react';
import foods from '../components/data/foods';

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  addItem: (itemId, quant) => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, addCartItems] = useState([]);
  const [totalAmount, totalAmountChange] = useState(0);

  const addItemHandler = (itemId, quant) => {
    if (cartItems.length > 0) {
      const itemToAdd = cartItems.filter((item) => item.id === itemId);

      if (itemToAdd.length > 0) {
        const existingItemIndex = cartItems.findIndex(
          (item) => item.id === itemId
        );
        const updatedCart = cartItems;
        updatedCart[existingItemIndex].quant =
          parseInt(updatedCart[existingItemIndex].quant) + parseInt(quant);
        addCartItems((cartItems) => {
          return [...updatedCart];
        });
      } else {
        addCartItems((cartItems) => {
          return [{ id: itemId, quant: quant }, ...cartItems];
        });
      }
    } else {
      addCartItems([{ id: itemId, quant: quant }]);
    }
    totalAmountChange((totalAmount) => {
      totalAmount +=
        parseInt(foods.filter((item) => item.id === itemId)[0].price) *
        parseInt(quant);
      return totalAmount;
    });
    const itemAddedQuant = parseInt(
      cartItems.filter((item) => item.id === itemId)[0].quant
    );
    if (itemAddedQuant === 0) {
      const newItems = cartItems.filter((item) => item.id !== itemId);
      addCartItems((cartItems) => {
        return [...newItems];
      });
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
        totalAmount: totalAmount,
        addItem: addItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
