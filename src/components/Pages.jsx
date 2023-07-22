import React, {useEffect} from 'react';
import styles from '../styles/Pages.module.css';
import { createPages } from '../utils/pagesCreator';
import { useSelector, useDispatch } from 'react-redux';
import { getPage } from '../actions/posts';
import { setCurreentPage } from '../redusers/postReduser';

const Pages = () => {
  const dispatch = useDispatch();
  const totalCount = useSelector(state => state.posts.totalCount);
  const valueInput = useSelector(state => state.posts.valueInput);
  const perPage = useSelector(state => state.posts.perPage);
  const currentPage = useSelector(state => state.posts.currentPage);
  const pagesCount = Math.ceil(totalCount/perPage);
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getPage(valueInput, currentPage, perPage))
  }, [currentPage]);

  return (
    <div className={styles.pages}>
       {pages.map((page, i) => 
       <div 
          className={currentPage === page ? styles.activ : styles.page}
          onClick={() => dispatch(setCurreentPage(page))} 
          key={i}
        >{page}</div>)}
    </div>
  );
};

export default Pages;