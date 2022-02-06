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

const LayoutHome = ({ children, headProps={}, hideLink, showCareers=true }) => {
  return (
    <>
      <HeadWithQuery {...headProps} />
      <Header showCareers={showCareers} showDark={false} />
      <div className="content-wrap">
        <main>{children}</main>
      </div>
      <Footer hideLink={hideLink} />
    </>
  )
}

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHome;
