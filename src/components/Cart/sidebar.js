import React, { useContext } from 'react'
import styled from '@emotion/styled'

import StoreContext from '../../context/StoreContext'
import LineItem from './LineItem'

const Wrapper = styled.div`
    position: fixed;
    z-index: 100;
    width: 30%;
    height: 100%;
    background-color: #fff;
    -webkit-box-shadow: -12px 3px 32px -14px rgba(0,0,0,0.4);
    -moz-box-shadow: -12px 3px 32px -14px rgba(0,0,0,0.4);
    box-shadow: -12px 3px 32px -14px rgba(0,0,0,0.4);
    right: 0;

    .row {
        padding: 0rem 2rem;
    }

    .top {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        padding-top: 1.2rem;
    }

    .exit {
        background: none;
        border: none;
        outline: none;
        font-size: 1.2rem;
    }

    table {
        font-weight: normal;
    }
`;

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
                <div className="row top">
                    <h3>Cart</h3>
                    <button className="exit" onClick={handleCloseClick}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="row">
                    {line_items}
                </div>

                <div className="row">
                    <div className="col">
                        <div className="card text-white bg-secondary mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Subtotal</h5>
                                <p className="card-text">$ {checkout.subtotalPrice}</p>
                                <hr />
                                <h5 className="card-title">Taxes</h5>
                                <p className="card-text">$ {checkout.totalTax}</p>
                            </div>
                        </div>
                        <div className="card text-white bg-success mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Total</h5>
                                <p className="card-text">$ {checkout.totalPrice}</p>
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