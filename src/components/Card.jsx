
import styles from '../styles/Card.module.css';
import Input from './Input';
import Navigation from './Navigation';
import Table from './Table';

const Card = () => {
  return (
    <div className={styles.card}>
      <Input/>
      <Table/>
      <Navigation/>
    </div>
  );
};

export default Card;