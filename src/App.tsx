import React from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import CounterWithSettings from "./components/counterWithSettings/CounterWithSettings";

function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterWithSettings/>
    </div>
  );
}

export default App;
