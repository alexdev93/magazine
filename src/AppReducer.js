export const initialState = {
    articles: [],
    article: {},
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
      default:
        return state;
    }
  };