// src/services/api.js
const API_URL = 'http://localhost:5000/articles';

export const getArticles = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getArticle = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createArticle = async (article) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
  return response.json();
};
