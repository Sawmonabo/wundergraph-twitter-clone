import React from 'react';
import Home from './Home';
import './App.css';

const authorized = true;

function App () {
  if (authorized) {
    return (
      <Home />
    );
  } else {
    return (
      <div>
      not authorized
      </div>
    );
  }
}

export default App;
