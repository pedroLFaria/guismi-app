import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> EDITADO.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
fetch("http://localhost:9000/api/ficha/id/1", { method: "GET", Header: new Headers })
.then(response => response.json())
.then(data => {sessionStorage.setItem("ficha", JSON.stringify(data))})
export default App;
