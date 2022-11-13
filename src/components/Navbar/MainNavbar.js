import React, { useContext } from 'react';
import Cart from './Cart';
import styles from './MainNavbar.module.css';

const Navigation = () => {
  return (
    <header className={styles['main-header']}>
      <h2 className={styles.title}>ReactDhaba</h2>
      <Cart className={styles['Cart']} />
    </header>
  );
};

export default Navigation;
