import React, { useContext } from 'react'

// @ts-ignore
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import { Table, TableHeading } from './styles'
import { BuyButton } from '../ProductForm/styles'

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
                            <h6>{checkout.subtotalPrice} €</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card text-white bg-secondary mb-3">
                        <div className="card-body">
                            <h4>Taxes (included in price)</h4>
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
            <BuyButton className="btn btn-success"
                onClick={handleCheckout}
                disabled={checkout.lineItems.length === 0}
                style={{
                    marginBottom: '8rem',
                    maxWidth: '300px',
                    height: '50px',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px'
                }}>Check out</BuyButton>
        </div >
    )
}

export default Cart