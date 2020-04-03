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
    padding: .6rem .5rem;
    color: whitesmoke;

    &:focus {
        outline: none;
    }
`;