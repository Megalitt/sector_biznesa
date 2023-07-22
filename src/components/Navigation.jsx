import React from 'react';
import Button from './Button';
import Pages from './Pages';
import styles from '../styles/Navigation.module.css';
import { useDispatch } from 'react-redux';
import { setBackPage, setForwardPage } from '../redusers/postReduser';

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.navigation}>
      <Button onClick={() => dispatch(setBackPage())}>Назад</Button>
      <Pages/>
      <Button onClick={() => dispatch(setForwardPage())}>Далее</Button>
    </div>
  );
};

export default Navigation;