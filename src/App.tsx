import React from 'react';
import './App.css';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import logo from './logo.svg';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
