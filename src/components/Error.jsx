import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Error.module.css';

const Error = () => {
  const textError = useSelector(state => state.posts.textError);
  return (
    <div className={styles.error}>
      {textError}
    </div>
  );
};

export default Error;