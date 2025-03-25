import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de que esta ruta es correcta
import './index.css'; // Si estás utilizando CSS

// Montar la app en el div con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
