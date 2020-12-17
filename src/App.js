import React from 'react';
import './App.css';

import CardOne from './components/CardOne';
import CardTwo from './components/CardTwo';

function Convert(props) {

  const handleSubmit = evt => {
    evt.preventDefault();
  }

  return (
      <div className="App">
          <CardOne />
          <br />
          <CardTwo />
      </div>
  )
}

export default Convert;
