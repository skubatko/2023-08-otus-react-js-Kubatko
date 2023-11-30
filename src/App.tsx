import React from 'react';
import './App.css';
import { LocalizationProvider } from './components/LocalizationProvider/LocalizationProvider';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <LocalizationProvider />
      <ThemeProvider>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Текст писать тут
          </p>
        </header>
      </ThemeProvider>
      ;
    </div>
  );
}

export default App;
