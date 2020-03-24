import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '../provider/ContextProvider'

import { GlobalStyle } from '../utils/styles'
import Navigation from '../components/Navigation'

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Navigation siteTitle={data.site.siteMetadata.title} />

            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">Protect your face</h1>
                <p className="lead">
                  KN95 CE Certification Face Mask will keep you safe from viruses!
                </p>
              </div>
            </div>

            <div className="container">
              {children}
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
