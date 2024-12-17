import  ReactDOM  from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './global.module.css' 

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
