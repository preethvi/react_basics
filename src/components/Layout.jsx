import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
    const name=props.children.props.name
  return (
    <>
    <Header name={name}/>
        {props.children}
    <Footer/>
    </>
  )
}

export default Layout