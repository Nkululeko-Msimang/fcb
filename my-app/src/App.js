import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import Calculator from './Calculator';


function App() {

    const submitValues = (e) => {
        console.log('function submit values');
        e.defaultPrevented();
    }



    return (
    <div className="App">
      <header className="App-header">
        <h2>Calculator</h2>
          <Calculator />
      </header>
    </div>
  );
}

export default App;
