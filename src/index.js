import React from 'react';
import ReactDOM from 'react-dom/client';
import {  BrowserRouter as Router, } from 'react-router-dom';
import App from './App';
import MenuBar from './componentes/menu';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MenuBar/>
      <App />
    </Router>
  </React.StrictMode>
);
