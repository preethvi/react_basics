import React from 'react'
import App from '../App'
import PageNotFound from './PageNotFound'

const Conditional = ({isTrue}) => {
  return (
    <>
   { isTrue?<App/>:<PageNotFound/>}
    </>
  )
}

export default Conditional