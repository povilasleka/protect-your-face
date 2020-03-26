import styled from '@emotion/styled'

export const Wrapper = styled.div`
    position: fixed;
    z-index: 1000;
    width: 26rem;
    height: 100%;
    background-color: #26272b;
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
`;