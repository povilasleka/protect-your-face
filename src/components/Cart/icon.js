import React, { useContext } from 'react'
import { Link } from 'gatsby-plugin-intl'
import styled from '@emotion/styled'
import reduce from 'lodash/reduce'
// @ts-ignore
import StoreContext from '~/context/StoreContext'

export const ClosedCart = styled(Link)`
    background: none;
    border: none;
    font-size: 1.6rem;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    position: fixed;
    z-index: 100;
    right: 0;
    top: 50%;
    width: 60px;
    height: 100px;
    background-color: rgb(245, 61, 61);
    border-radius: 5rem 0 0 5rem;
    color: whitesmoke;

    &:focus {
        outline: none;
    }

    i {
        transform: translate(1rem, 1.8rem);
        color: whitesmoke;
    }

    i:hover {
        color: whitesmoke;
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

    if (!hasItems) return <></>

    return (
        <ClosedCart to="/cart">
            <i className="fas fa-shopping-cart"></i>
        </ClosedCart>
    )
}

export default Icon;