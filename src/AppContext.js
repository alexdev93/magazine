import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { appReducer, initialState } from './AppReducer';
const API_URL = 'https://back-api-cvlq.onrender.com/api/news';


const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getArticles = async () => {
    try {
      const response = await axios.get(API_URL);
      dispatch({ type: 'FETCH_ARTICLES_SUCCESS', payload: response.data });
    } catch (error) {
      console.error('Failed to fetch articles:', error);
      dispatch({ type: 'FETCH_ARTICLES_FAILURE' });
    }
  };

  const getArticle = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      dispatch({ type: 'FETCH_ARTICLE_SUCCESS', payload: response.data });
    } catch (error) {
      console.error('Failed to fetch article:', error);
      dispatch({ type: 'FETCH_ARTICLES_FAILURE' });
    }
  };

  return (
    <AppContext.Provider value={{ state, getArticles, getArticle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
