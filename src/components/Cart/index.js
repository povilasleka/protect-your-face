import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },

  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div className="row">
      <div className="col col-md-6">
        {line_items}
        <h2>Subtotal</h2>
        <p>$ {checkout.subtotalPrice}</p>
        <br />
        <h2>Taxes</h2>
        <p>$ {checkout.totalTax}</p>
        <br />
        <h2>Total</h2>
        <p>$ {checkout.totalPrice}</p>
        <br />
        <button onClick={handleCheckout}
          disabled={checkout.lineItems.length === 0}
          className="btn btn-success"
          style={{
            backgroundColor: '#3167EB',
            border: '0px',
            padding: '.4rem 1.2rem'
          }}>Check out</button>
      </div>
      <div className="col col-md-6">
        A
      </div>
    </div>
  )
}

export default Cart
