import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import Friends from './Components/Friends'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Friends} />
    </div>
  );
}

export default App;
