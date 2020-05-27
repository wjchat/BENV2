import React from "react"  
import PropTypes from "prop-types"

import "../assets/css/default.css"

import Seo from "./seo"

const Layout = (props) => {  
  return (
    <>
      <head>
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,900;1,400;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <Seo title = {props.title}/>
      <main>{props.children}</main>
    </>
  )
}

Layout.propTypes = {  
  children: PropTypes.node.isRequired,
}

export default Layout