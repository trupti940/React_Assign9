import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useReducer } from 'react';
import { initialState, reducer } from './formReducer'; // Adjust path if necessary


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmailChange = (e) => {
    dispatch({ type: 'SET_EMAIL', payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to display the details can be added here
  };

  const resetForm = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>

      {state.email || state.password ? (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      ) : (
        <div>No details found</div>
      )}
    </div>
  );
};

export default App;
