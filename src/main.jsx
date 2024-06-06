import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './containers/home'
import myGlobalStyles from './styles/globalstyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Home/>
  <myGlobalStyles/>
  </React.StrictMode>,
)
