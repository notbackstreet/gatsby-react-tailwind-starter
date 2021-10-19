/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          className="bg-primary w-full flex flex-col items-center relative flex-grow"
        >
          <main>{children}</main>
        </div>
        <footer className="w-full flex justify-center bg-offwhite h-30 xl:h-20 z-10 relative">
          <div className="flex flex-col xl:flex-row text-center text-secondary font-mono w-half justify-between mr-12 no-underline">
            <span className="pt-4 pb-4 xl:px-8 xl:py-8">© {new Date().getFullYear()}, Nick Carter.</span>
            <Link className=" xl:px-8 xl:py-8 hover:text-primary" to="/privacy/">Privacy Policy</Link>
            <Link className="pt-2 pb-2 xl:px-4 xl:py-8 hover:text-primary" to="/terms/">Terms & Conditions</Link>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
