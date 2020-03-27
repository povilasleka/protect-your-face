import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ContextProvider from '../provider/ContextProvider'

import { GlobalStyle } from '../utils/styles'
import Navigation from '../components/Navigation'
import Cart from '../components/Cart/index'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  return (
    <ContextProvider>
      <GlobalStyle />

      {isCartOpen && <Cart handleCloseClick={closeCart} />}
      <Navigation handleCartClick={openCart} />
      {children}
      <div className="container">
        {/*<footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>*/}

      </div>
      <Footer />

    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
