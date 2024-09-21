import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useReducer } from 'react';
import { initialState, reducer } from './collegeReducer'; // Adjust path if necessary

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, payload: e.target.value });
  };

  const handleAddressChange = (e) => {
    dispatch({ type: 'SET_ADDRESS_FIELD', field: e.target.name, payload: e.target.value });
  };

  const handleCityChange = (e) => {
    dispatch({ type: 'SET_CITY_FIELD', field: e.target.name, payload: e.target.value });
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
      <h1>Add College</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="College Name"
          value={state.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="establishment_year"
          placeholder="Establishment Year"
          value={state.establishment_year}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="building"
          placeholder="Building"
          value={state.address.building}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={state.address.street}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="cityName"
          placeholder="City Name"
          value={state.address.city.name}
          onChange={handleCityChange}
        />
        <input
          type="text"
          name="locality"
          placeholder="Locality"
          value={state.address.city.locality.locality}
          onChange={handleCityChange}
        />
        <input
          type="text"
          name="pinCode"
          placeholder="Pincode"
          value={state.address.city.locality.pinCode}
          onChange={handleCityChange}
        />
        <input
          type="text"
          name="landmark"
          placeholder="Landmark"
          value={state.address.city.locality.landmark}
          onChange={handleCityChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={state.address.state}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="latitude"
          placeholder="Latitude"
          value={state.address.coordinates.latitude}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          name="longitude"
          placeholder="Longitude"
          value={state.address.coordinates.longitude}
          onChange={handleAddressChange}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>

      {state.name && (
        <div>
          <h2>College Details</h2>
          <div>College Name: {state.name}</div>
          <div>Establishment Year: {state.establishment_year}</div>
          <div>Address: {state.address.building}, {state.address.street}, {state.address.city.name}, {state.address.state}</div>
          <div>Pincode: {state.address.city.locality.pinCode}</div>
          <div>Landmark: {state.address.city.locality.landmark}</div>
        </div>
      )}
    </div>
  );
};

export default App;
