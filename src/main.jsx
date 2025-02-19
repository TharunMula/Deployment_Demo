import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShoppingCartProvider  from './context'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter><ShoppingCartProvider><App /></ShoppingCartProvider></BrowserRouter>
 
  
  
)
