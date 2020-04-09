import React, { useContext } from 'react'
import { Link } from 'gatsby-plugin-intl'
import styled from '@emotion/styled'
import reduce from 'lodash/reduce'
// @ts-ignore
import StoreContext from '~/context/StoreContext'

export const ClosedCart = styled(Link)`
    border: none;
    font-size: 1.6rem;
    position: fixed;
    z-index: 100;
    right: 0;
    top: 20%;
    width: 35px;
    height: 100px;
    padding: 0 5px;
    background: rgb(247,56,66);
    background: linear-gradient(150deg, rgba(247,56,66,1) 0%, rgba(247,115,40,1) 100%);
    border-radius: 10px 0 0 10px;
    color: whitesmoke;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-align: center;

    box-shadow: 0 1px 1px rgba(0,0,0,0.06), 
              0 2px 2px rgba(0,0,0,0.08), 
              0 4px 4px rgba(0,0,0,0.06), 
              0 8px 8px rgba(0,0,0,0.08),
              0 16px 16px rgba(0,0,0,0.06);

    @keyframes shake {
        2.5%, 22.5% {
            transform: translate3d(-0.5px, 0, 0);
        }

        5%, 20% {
            transform: translate3d(1px, 0, 0);
        }

        7.5%, 12.5%, 17.5% {
            transform: translate3d(-1.5px, 0, 0);
        }

        10%, 15% {
            transform: translate3d(1.5px, 0, 0);
        }
    }

    &:focus {
        outline: none;
    }

    i {
        color: rgb(247,56,66);
        font-size: 2rem;
        animation: shake 4s;
        animation-iteration-count: infinite;
    }

    &:hover {
        color: whitesmoke;
        text-decoration: none;
    }

    p {
        text-transform: uppercase;
        text-decoration: none;
        color: whitesmoke;
        font-size: 1.1rem;
        letter-spacing: 4px;
        padding: 0;
        margin: 0;
        font-weight: bold;
    }
`;

const useQuantity = () => {
    const { store: { checkout } } = useContext(StoreContext)
    const items = checkout ? checkout.lineItems : []
    const total = reduce(items, (acc, item) => acc + item.quantity, 0)
    return [total !== 0, total]
}

const Icon = () => {
    const [hasItems, quantity] = useQuantity();

    if (!hasItems) return null;

    return (
        <ClosedCart to="/cart">
            <p>cart</p>
            <i className="fas fa-exclamation"></i>
        </ClosedCart>
    )
}

export default Icon;