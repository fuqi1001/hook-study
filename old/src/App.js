import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContextComponent from './component/context/ContextComponent';
import Counter from './component/reducer/ReducerExp';

function App() {
  return (
    <div className="App">
      <ContextComponent />
      <Counter />
    </div>
  );
}

export default App;
