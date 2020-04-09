import styled from '@emotion/styled'
import { BuyButton } from '../ProductForm/styles'

export const Wrapper = styled.div`
    position: fixed;
    z-index: 1000;
    width: 26rem;
    height: 100%;
    background-color: rgba(38, 39, 43, .9);
    color: whitesmoke;
    animation: sideslide .5s;
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
        color: whitesmoke;
    }

    @keyframes sideslide {
        from {
            right: -26rem;
        }
        to {
            right: 0rem;
        }
    }

    @media only screen and (max-width: 576px) {
        width: 100%;
    }
`;

export const Table = styled.table`
    
`;

export const TableHeading = styled.tr`
    th {
        padding: 1.5rem;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    border-radius: 5px;
    margin-bottom: 1rem;
`;

export const CheckoutButton = styled(BuyButton)`
    margin-bottom: 8rem;
    width: ${props => props.isMobileDevice ? '100%' : '300px'};
    padding-top: .5rem;
    height: 50px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
`;

