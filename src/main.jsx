import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Conditional from './components/Conditional.jsx'
import List from './components/List.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <App /> */}
    <List/>
  </React.StrictMode>,
)
