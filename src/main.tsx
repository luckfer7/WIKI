import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import GlobalStyle from './GlobalStyle';
import React from 'react';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
