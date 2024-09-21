// themeReducer.js

const initialState = {
    theme: 'light', // Possible values: 'light' or 'dark'
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          theme: state.theme === 'light' ? 'dark' : 'light',
        };
      default:
        return state;
    }
  };
  
  export { initialState, reducer };
  