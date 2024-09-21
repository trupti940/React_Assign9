import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useReducer } from 'react';
import React, { useReducer } from 'react';
import { initialState, reducer } from './counterReducer'; // Adjust path if necessary

import { initialState, reducer } from './themereducer'; // Adjust path if necessary


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div
      style={{
        backgroundColor: state.theme === 'light' ? '#ffffff' : '#333333',
        color: state.theme === 'light' ? '#000000' : '#ffffff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s',
      }}
    >
      <div>
        <h1>Current Theme: {state.theme}</h1>
        <button onClick={toggleTheme}>
          Toggle to {state.theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
};

export default App;

