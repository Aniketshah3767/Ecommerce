import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider, { ShopContext } from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <App/>
    </ShopContextProvider>
  </BrowserRouter>
)
