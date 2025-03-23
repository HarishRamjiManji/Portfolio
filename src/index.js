import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // Import Router
//import { BrowserRouter as Router } from 'react-router-dom';
import './Styles/style1.css';
import App from './components/App'; // Import your main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
