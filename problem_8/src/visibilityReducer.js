

const initialState = { isVisible: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBILITY':
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
};

export { initialState, reducer };
