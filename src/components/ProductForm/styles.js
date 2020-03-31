import styled from '@emotion/styled'

export const OutOfStock = styled.p`
    margin-top: .3rem;
    color: red;
    font-weight: 400;
    font-size: 1.2rem;
`;

export const InStock = styled(OutOfStock)`
    color: green;
`;

export const BuyButton = styled.button`
    border-radius: 3px;
    padding: .4rem 2rem;
    border: 0;
    font-weight: bold;
    color: whitesmoke;
    width: 100%;
    margin-top: .5rem;
`;

export const QuantityInput = styled.input`
    box-sizing: border-box;
    display: inline; 
`;