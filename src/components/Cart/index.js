import React, { useContext, useState } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

import { Wrapper, ClosedCart } from './styles'

const CheckoutSidebar = () => {
    const [isCartOpen, setCartStatus] = useState(false);

    const {
        store: { checkout },
    } = useContext(StoreContext)

    const handleCheckout = () => {
        window.open(checkout.webUrl)
    }

    const line_items = checkout.lineItems.map(line_item => {
        return <LineItem key={line_item.id.toString()} line_item={line_item} />
    });

    if (isCartOpen) return (
        <Wrapper>
            <div className="container-fluid">

                <div className="row mb-5">
                    <div className="col top">
                        <h3>Cart</h3>
                        <button className="exit" onClick={() => setCartStatus(false)}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <div className="row">
                    {line_items.length === 0 && (<div className="col">
                        Cart is empty
                    </div>)}
                    {line_items}
                </div>

                <div className="row mt-5">
                    <div className="col">
                        <div className="card text-white bg-success">
                            <div className="card-body">
                                <h5 className="card-title">Total</h5>
                                <p className="card-text">{checkout.totalPrice} €</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <button onClick={handleCheckout}
                            disabled={checkout.lineItems.length === 0}
                            className="btn btn-success mt-5"
                            style={{
                                backgroundColor: '#3167EB',
                                border: '0px',
                                padding: '.8rem',
                                width: '100%'
                            }}>Check out</button>
                    </div>
                </div>

            </div>
        </Wrapper>
    );

    return (
        <ClosedCart onClick={() => setCartStatus(true)}>
            <i className="fas fa-shopping-cart"></i>
        </ClosedCart>
    );
}

export default CheckoutSidebar;