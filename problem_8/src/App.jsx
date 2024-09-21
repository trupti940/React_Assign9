import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useReducer } from 'react';
import { initialState, reducer } from './visibilityReducer'; // Adjust path if necessary

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleVisibility = () => {
    dispatch({ type: 'TOGGLE_VISIBILITY' });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={toggleVisibility}>Toggle Message</button>
      {state.isVisible && <h1>Hello, World!</h1>}
    </div>
  );
};

export default App;
