// collegeReducer.js

const initialState = {
    name: '',
    establishment_year: '',
    address: {
      building: '',
      street: '',
      city: {
        name: '',
        locality: {
          pinCode: '',
          landmark: ''
        }
      },
      state: '',
      coordinates: {
        latitude: '',
        longitude: ''
      },
    },
    courses_offered: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FIELD':
        return {
          ...state,
          [action.field]: action.payload,
        };
      case 'SET_ADDRESS_FIELD':
        return {
          ...state,
          address: {
            ...state.address,
            [action.field]: action.payload,
          },
        };
      case 'SET_CITY_FIELD':
        return {
          ...state,
          address: {
            ...state.address,
            city: {
              ...state.address.city,
              [action.field]: action.payload,
            },
          },
        };
      case 'RESET':
        return initialState;
      default:
        throw new Error('Invalid action type');
    }
  };
  
  export { initialState, reducer };
  