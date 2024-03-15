import React from 'react';
//import logo from './OneRogueDeveloper.png';
import './App.css';
import Header from './Header';
import BowlingInfo from './Bowling/BowlingInfo';

function App() {
  return (
    <div className="App">
      <Header title="Bowling League" />
      <main>
        <BowlingInfo />
      </main>
    </div>
  );
}

export default App;
