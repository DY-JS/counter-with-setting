import React from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import CounterWithSettings from "./components/counterWithSettings/CounterWithSettings";
import CounterTwoInOne from "./components/counterTwoInOne/CounterTwoInOne";

function App() {
    return (
        <div className="App">
            <Counter/>
            {/*<CounterWithSettings/>*/}
            {/*<CounterTwoInOne/>*/}
        </div>
    );
}

export default App;
