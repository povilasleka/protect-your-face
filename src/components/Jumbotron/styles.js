import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'
import BackgroundImage from 'gatsby-background-image'

export const Wrapper = styled(BackgroundImage)`
    background-color: rgb(66, 135, 245);
    background-size: cover;
    height: 450px;
    margin-bottom: 0;
    padding: 0;
    display: flex;
    align-items: center;
    border-radius: 0;

    h1, p {
        color: #f5f3f0;
        padding: 10px;
        margin: 0;
    }
    

    p {
        font-weight: 400;
        text-align: justify;
    }

    @media only screen and (min-width: ${breakpoints.s}px) {
        &,
        &::before,
        &::after {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    @media only screen and (max-width: ${breakpoints.s}px) {
        h1 {
            font-size: 2rem;
        }

        p {
            line-height: 25px;
        }
    }
`;

export const Offer = styled.div`
    padding: 1.8rem 0 1rem 0;
    margin: 0;
    background: #5387F4;



    .container {
        color: whitesmoke;
    }

    .fa-clock {
        font-size: 4.5rem;
    }
`;