export const initialState = {
  articles: [],
  article: {},
  houses: [],
  house: {},
  loading: true,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_SUCCESS':
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case 'FETCH_ARTICLE_SUCCESS':
      return {
        ...state,
        article: action.payload,
        loading: false,
      };
    case 'FETCH_ARTICLES_FAILURE':
      return {
        ...state,
        loading: false,
      };
    case 'FETCH_HOUSES_SUCCESS':
      return {
        ...state,
        houses: action.payload,
      };
    case 'FETCH_HOUSE_SUCCESS':
      return {
        ...state,
        house: action.payload,
      };
    case 'FETCH_HOUSE_FAILURE':
      return {
        ...state,
      };
    case 'FETCH_HOUSES_FAILURE':
      return {
        ...state,
      };
    default:
      return state;
  }
};