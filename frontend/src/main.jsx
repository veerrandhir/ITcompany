// File: src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // ✅ Include global styles or Tailwind

// ✅ AOS for scroll animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS animations
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true, // Animate only once
});

// Create root and render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
