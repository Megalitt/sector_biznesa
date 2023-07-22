import styles from '../src/styles/App.module.css';
import Card from './components/Card';
import React from 'react';
import Error from './components/Error';
import { useSelector } from 'react-redux';

function App() {
  const textError = useSelector(state => state.posts.textError);
  
  return (
    <div className={styles.app}>
      {!!textError
      ?
      <Error/>
      :
      <Card/>
      }
    </div>
  );
}

export default App;
