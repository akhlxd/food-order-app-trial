import MainNavbar from './components/Navbar/MainNavbar';
import bg from './components/images/food-crop.jpg';
import MessageBox from './components/Body/MessageBox';
import Menu from './components/Body/Menu';
import styles from './App.module.css';
import { CartContextProvider } from './Context/cart-context';

function App() {
  return (
    <CartContextProvider>
      <MainNavbar className={styles['main-navbar']} />
      <img src={bg} alt="food" className={styles['background-image']} />
      <MessageBox />
      <Menu />
    </CartContextProvider>
  );
}

export default App;
