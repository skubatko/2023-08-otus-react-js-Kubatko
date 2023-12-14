import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'src/layout';
import { Navigation } from 'src/navigation/Navigation';
import { ThemeProvider } from 'src/theming';
import { Head } from './Head';
import { store } from './store';
import { Initializer } from './store/Initializer';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Head />
        <Initializer />
        <ThemeProvider>
          <Layout>
            <Navigation />
          </Layout>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
