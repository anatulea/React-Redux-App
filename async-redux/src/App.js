import React from 'react';
import MakeUpList from './componenets/MakeUpList';
import MakeUpForm from './componenets/MakeUpForm.js';
import './App.css';


function App() {
  return (
      <div className="App">
        <header className="App-header">
         <MakeUpForm/>
        <MakeUpList/>
        </header>
      </div>
  );
}

export default App;
