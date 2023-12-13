import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'src/App';
import 'symbol-observable';
import './styles/index.sass';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
