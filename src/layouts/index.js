import React, { useState, useContext } from 'react'
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
      <Navigation handleCartClick={openCart}/>

      {children}

      <Footer />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
