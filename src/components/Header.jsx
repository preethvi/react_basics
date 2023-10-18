import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <>
    <header>
        <nav>
            <Link to="/" className='logo'>{props.name}</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header