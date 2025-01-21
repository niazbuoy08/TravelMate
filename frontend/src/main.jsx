import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main application component
import './index.css'; // Tailwind CSS and global styles

// Find the root DOM element in your index.html file
const rootElement = document.getElementById('root');

// Create a React root and render the App component
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
