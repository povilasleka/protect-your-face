import React, { useContext } from 'react'

// @ts-ignore
import StoreContext from '~/context/StoreContext'
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
        <div>
            <h1 style={{ marginTop: '1rem' }}>Cart</h1>
            <div className="row" style={{ marginTop: '5rem', marginBottom: '2rem' }}>
                <div className="col-md-4">
                    <h2>Subtotal</h2>
                    <p>$ {checkout.subtotalPrice}</p>
                    <br />
                    <h2>Taxes</h2>
                    <p>$ {checkout.totalTax}</p>
                    <br />
                    <h2>Total</h2>
                    <p>$ {checkout.totalPrice}</p>
                </div>
                <div className="col-md-8">
                    {line_items}
                </div>
            </div>
            <br />
            <button className="btn btn-success"
                onClick={handleCheckout}
                disabled={checkout.lineItems.length === 0}
                style={{ marginBottom: '8rem' }}>Check out</button>
        </div >
    )
}

export default Cart