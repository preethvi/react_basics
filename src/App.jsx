import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
function App() {
  return (
    // jsx
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App
