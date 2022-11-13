import Card from '../UI/Card';
import styles from './MessageBox.module.css';

const MessageBox = () => {
  return (
    <Card className={styles['message-box']}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};

export default MessageBox;
