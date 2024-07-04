import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { appReducer, initialState } from './AppReducer';
const API_URL = 'https://back-api-cvlq.onrender.com/api';


const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getArticles = async () => {
    try {
      const response = await axios.get(`${API_URL}/news`);
      dispatch({ type: 'FETCH_ARTICLES_SUCCESS', payload: response.data });
    } catch (error) {
      console.error('Failed to fetch articles:', error);
      dispatch({ type: 'FETCH_ARTICLES_FAILURE' });
    }
  };

  const getArticle = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/news/${id}`);
      dispatch({ type: 'FETCH_ARTICLE_SUCCESS', payload: response.data });
    } catch (error) {
      console.error('Failed to fetch article:', error);
      dispatch({ type: 'FETCH_ARTICLES_FAILURE' });
    }
  };

  const getHouse = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/houses/${id}`);
      dispatch({ type: 'FETCH_HOUSE_SUCCESS', payload: response.data });
    } catch (error) {
      console.error('Failed to fetch house:', error);
      dispatch({ type: 'FETCH_HOUSE_FAILURE' });
    }
  };

  const getHouses = async () => {
    try {
      const response = await axios.get(`${API_URL}/houses`);
      dispatch({ type: 'FETCH_HOUSES_SUCCESS', payload: response.data });
    } catch (error) {
      console.error('Failed to fetch house:', error);
      dispatch({ type: 'FETCH_HOUSES_FAILURE' });
    }
  };

  return (
    <AppContext.Provider value={{ state, getArticles, getArticle, getHouse,getHouses }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
