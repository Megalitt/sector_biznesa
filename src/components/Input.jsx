import React, { useState } from 'react';
import styles from '../styles/Input.module.css';
import Svg from '../image/search1.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../actions/posts';
import { setCurreentPage } from '../redusers/postReduser';

const Input = () => {
  const [valueInput, setValueInput] = useState('');
  const dispatch = useDispatch();
  const perPage = useSelector(state => state.posts.perPage);
  const currentPage = useSelector(state => state.posts.currentPage);
  
  const searchHeandler = () => {
    dispatch(setCurreentPage(1));
    dispatch(getPage(valueInput, currentPage, perPage));
    setValueInput('');
  }

  return (
    <div className={styles.blok}>
      <input 
        className={styles.input}
        type="text" 
        value={valueInput} 
        placeholder='Поиск'
        onChange={(e) => setValueInput(e.target.value)}
      />
      <img 
        src={Svg} 
        alt="none" 
        className={styles.svg}
        onClick={() => searchHeandler()}
        /> 
    </div>
  );
};

export default Input;