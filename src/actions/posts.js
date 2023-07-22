import axios from "axios";
import { setError, setPage } from "../redusers/postReduser";

export const getPage = (valueInput, currentPage, perPage) => {
  if(valueInput !== ''){
    currentPage = 1
  }
  return async (dispatch) => {
    try{
     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/?q=${valueInput}&_limit=${perPage}&_page=${currentPage}`);
    dispatch(setPage(response.data));
    console.log(valueInput, 'valueInput');  
    }catch (e){
      dispatch(setError('Ошибка при загрузке'))
    }
  } 
}