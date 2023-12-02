import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { LocalizationProvider } from './components/LocalizationProvider/LocalizationProvider';
import { Layout } from './layout';
import { Navigation } from './navigation/Navigation';
import { ThemeProvider } from './theming';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LocalizationProvider />
        <ThemeProvider>
          <Layout>
            <Navigation />
          </Layout>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
