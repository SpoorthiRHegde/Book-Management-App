import React from 'react';
import { createRoot } from 'react-dom/client';  // ✅ updated import
import App from './App';
import './i18n';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
