import React, { useState } from 'react';
import styles from '../styles/Table.module.css';
import Svg from '../image/Group1.svg';
import Posts from './Posts';
import { useDispatch } from 'react-redux';
import { setSortBody, setSortId, setSortTitle } from '../redusers/postReduser';

const Table = () => {
  const dispatch = useDispatch();
  const [stateId, setStateId] = useState(false);
  const [stateTitle, setStateTitle] = useState(false);
  const [stateBody, setStateBody] = useState(false);

  const sortIdHeandler = () => {
    setStateId(state => !state);
    dispatch(setSortId(stateId));
    setStateTitle(false);
    setStateBody(false);
  }
  const sortTitleHeandler = () => {
    setStateTitle(state => !state); 
    dispatch(setSortTitle(stateTitle));
    setStateId(false)
    setStateBody(false);
  }
  const sortBodyHeandler = () => {
    setStateBody(state => !state); 
    dispatch(setSortBody(stateBody));
    setStateId(false)
    setStateTitle(false);
  }

  return (
    <table className={styles.table}>
      <thead >
        <tr>
          <th onClick={() => sortIdHeandler()}>ID<img src={Svg} alt='none' className={stateId ? styles.activ : ''}/></th>
          <th onClick={() => sortTitleHeandler()}>Заголовок<img src={Svg} alt='none' className={stateTitle ? styles.activ : ''}/></th>
          <th onClick={() => sortBodyHeandler()}>Описание<img src={Svg} alt='none' className={stateBody ? styles.activ : ''}/></th>
        </tr>
      </thead>
      <Posts/>
    </table>
  );
};

export default Table;
