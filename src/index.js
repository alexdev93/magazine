import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this import is from 'react-dom/client'
import App from './App';
import ErrorBoundary from './ErrorBoundary'; // Assuming you have an error boundary

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
