/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "../footer/footer"
import HeadWithQuery from "../head/head"
import Header from "../header/header"
import "scss/main.scss"

const Layout = ({ children, headProps={}, hideLink }) => {
  return (
    <>
      <HeadWithQuery {...headProps} />
      <Header />
      <div className="content-wrap">
        <main>{children}</main>
      </div>
      <Footer hideLink={hideLink} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
