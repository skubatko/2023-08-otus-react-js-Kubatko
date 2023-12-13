import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'src/layout';
import { Navigation } from 'src/navigation/Navigation';
import { ThemeProvider } from 'src/theming';
import { Head } from './Head';

function App() {
  return (
    <BrowserRouter>
      <Head />
      <ThemeProvider>
        <Layout>
          <Navigation />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
