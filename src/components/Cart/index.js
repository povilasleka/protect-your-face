import React, { useContext } from 'react'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

import { Wrapper } from './styles'

const CheckoutSidebar = ({ handleCloseClick }) => {
    const {
        store: { checkout },
    } = useContext(StoreContext)

    const handleCheckout = () => {
        window.open(checkout.webUrl)
    }

    const line_items = checkout.lineItems.map(line_item => {
        return <LineItem key={line_item.id.toString()} line_item={line_item} />
    });

    return (
        <Wrapper>
            <div className="container-fluid">
                
                <div className="row mb-5">
                    <div className="col top">
                    <h3>Cart</h3>
                    <button className="exit" onClick={handleCloseClick}>
                        <i className="fas fa-times"></i>
                    </button>
                    </div>
                </div>

                <div className="row">
                    {line_items}
                </div>

                <div className="row mt-5">
                    <div className="col">
                        <div className="card text-white bg-secondary mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Subtotal</h5>
                                <p className="card-text">{checkout.subtotalPrice} €</p>
                                <hr />
                                <h5 className="card-title">Taxes</h5>
                                <p className="card-text">{checkout.totalTax} €</p>
                            </div>
                        </div>
                        <div className="card text-white bg-success mb-3">
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
        </Wrapper >
    );
}

export default CheckoutSidebar;