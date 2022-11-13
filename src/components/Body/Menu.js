import foods from '../data/foods';
import Card from '../UI/Card';
import styles from './Menu.module.css';
import MenuItem from './MenuItem';

const Menu = () => {
  const menuItems = foods.map((food) => {
    return (
      <MenuItem
        key={food.id}
        id={food.id}
        name={food.name}
        desc={food.desc}
        price={food.price}
      />
    );
  });
  return <Card className={styles['menu-card']}>{menuItems}</Card>;
};

export default Menu;
