import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from 'react-router-dom';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
