import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraBaseProvider>
  </React.StrictMode>
);
