import styled from '@emotion/styled'

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

export const ClosedCart = styled.button`
    background: none;
    border: 2px solid rgba(245, 54, 207, .8);
    font-size: 1.6rem;
    position: relative;
    top: 50%;
    transform: translate(5px, -50%);
    position: fixed;
    z-index: 100;
    right: 0;
    top: 50%;
    width: 60px;
    height: 100px;
    background-color: rgba(38, 39, 43, .9);
    border-radius: 5rem 0 0 5rem;
    padding: .5rem;
    color: #d9d9d9;

    &:focus {
        outline: none;
    }
`;