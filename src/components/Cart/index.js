import React, { useContext, useEffect } from 'react'

// @ts-ignore
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import { Table, TableHeading, CheckoutButton } from './styles'
import { OutboundLink } from 'gatsby-plugin-gtag'
import { useMediaQuery } from 'react-responsive'

const Cart = () => {
    const {
        store: { checkout },

    } = useContext(StoreContext)

    /*const handleCheckout = () => {
        window.open(checkout.webUrl, '_self');
    }*/

    const line_items = checkout.lineItems.map(line_item => {
        return <LineItem key={line_item.id.toString()} line_item={line_item} />
    })

    const isMobileDevice = useMediaQuery({ query: '(max-width: 576px)' });

    let redirectUrl = "";
    if (typeof checkout.webUrl != 'undefined') {
        redirectUrl = checkout.webUrl.slice(8);
        redirectUrl = redirectUrl.slice(redirectUrl.indexOf('/') + 1);
    }

    return (
        <div>
            <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Cart</h2>
            <Table className="table">
                <thead className="thead-light">
                    <TableHeading>
                        <th scope="col">Product</th>
                        <th scope="col"></th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Remove</th>
                    </TableHeading>
                </thead>
                <tbody>
                    {line_items}
                </tbody>
            </Table>
            <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Order Summary</h2>
            <div className="row" style={{ marginBottom: '2rem' }}>
                <div className="col-md-4 col-sm-12">
                    <div className="card text-white bg-secondary mb-3">
                        <div className="card-body">
                            <h4>Subtotal</h4>
                            <h6>{(checkout.subtotalPrice - checkout.totalTax).toFixed(2)} €</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card text-white bg-secondary mb-3">
                        <div className="card-body">
                            <h4>Taxes</h4>
                            <h6>{checkout.totalTax} €</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-body">
                            <h4>Total</h4>
                            <h6>{checkout.totalPrice} €</h6>
                        </div>
                    </div>
                </div>
            </div>

            <OutboundLink href={`/shopify/` + redirectUrl}>
                <CheckoutButton className="btn btn-success" 
                                disabled={checkout.lineItems.length === 0}
                                isMobileDevice={isMobileDevice}>
                    Check out
                </CheckoutButton>
            </OutboundLink>
        </div >
    )
}

export default Cart