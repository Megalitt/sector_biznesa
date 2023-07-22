const SET_PAGE = "SET_PAGE";
const SET_FORWARD_PAGE = "SET_FORWARD_PAGE";
const SET_BACK_PAGE = "SET_BACK_PAGE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_SORT_ID = "SET_SORT_ID";
const SET_SORT_TITLE = "SET_SORT_TITLE";
const SET_SORT_BODY = "SET_SORT_BODY";
const SET_ERROR = "SET_ERROR";

const defaultState = {
  posts: [],
  currentPage: 1,
  perPage: 10,
  totalCount: 100,
  valueInput: '',
  textError: '',
};

export default function reposReduser(state = defaultState, action) {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        posts: action.payload,
      }
    case SET_FORWARD_PAGE:
      const forvard = () => {
        if(state.currentPage === state.perPage){
          return state.perPage
        }else{
          return state.currentPage + 1
        }
      }
      return {
        ...state,
        currentPage: forvard(),
      }
    case SET_BACK_PAGE:
      const back = () => {
        if(state.currentPage === 1){
          return 1
        }else{
          return state.currentPage - 1
        }
      }
      return {
        ...state,
        currentPage: back(),
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case SET_SORT_ID:
      const idA = (a, b) => a.id > b.id ? -1 : 1;
      const idB = (a, b) => b.id > a.id ? -1 : 1;
      const sortId = () => {
        if(action.payload){
          return [...state.posts].sort(idA)
        }else{
          return [...state.posts].sort(idB)
        }
      }
      return {
        ...state,
        posts: sortId(),
      }
    case SET_SORT_TITLE:
      const titleA = (a, b) => a.title > b.title ? -1 : 1;
      const titleB = (a, b) => a.title < b.title ? -1 : 1;
      const sortTitle = () => {
        if(action.payload){
          return [...state.posts].sort(titleA)
        }else{
          return [...state.posts].sort(titleB)
        }
      }
      return {
        ...state,
        posts: sortTitle(),
      }
    case SET_SORT_BODY:
      const bodyA = (a, b) => a.body > b.body ? -1 : 1;
      const bodyB = (a, b) => a.body < b.body ? -1 : 1;
      const sortBody = () => {
        if(action.payload){
          return [...state.posts].sort(bodyA)
        }else{
          return [...state.posts].sort(bodyB)
        }
      }
      return {
        ...state,
        posts: sortBody(),
      }
    case SET_ERROR:
      return {
        ...state,
        textError: action.payload,
      }
    default:
      return state;
  }
};

export const setPage = (payload) => ({type: SET_PAGE, payload});
export const setForwardPage = () => ({type: SET_FORWARD_PAGE});
export const setBackPage = () => ({type: SET_BACK_PAGE});
export const setCurreentPage = (payload) => ({type: SET_CURRENT_PAGE, payload});
export const setSortId = (payload) => ({type: SET_SORT_ID, payload});
export const setSortTitle = (payload) => ({type: SET_SORT_TITLE, payload});
export const setSortBody = (payload) => ({type: SET_SORT_BODY, payload});
export const setError = (payload) => ({type: SET_ERROR, payload});