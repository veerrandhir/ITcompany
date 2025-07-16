<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
// File: src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// If you have global CSS, import it here (e.g., for base styles or utilities not covered by Tailwind)
// import './index.css'; 
// src/main.jsx (add these lines if using AOS)
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
>>>>>>> 83297d600bf07cd7fc3df7053dd66a8514a3df0a
