import styled from '@emotion/styled'

export const Wrapper = styled.div`
    background-image: url('https://image.shutterstock.com/z/stock-photo-as-part-of-the-operations-of-a-coronavirus-mobile-testing-unit-a-healthcare-worker-dressed-in-full-1675328320.jpg');
    background-size: cover;
    @media only screen and (min-width: 576px) {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
    }

    height: 500px;
    margin-bottom: 0;
    padding: 0;

    transform: translateY(-5rem);

    .overlay {
        position: relative;
        width: 100%;
        background: rgba(76, 76, 76, .5);
        height: 100%;
    }

    .container {
        position: relative;
        transform: translate(-.6rem, -20.5rem);
    }

    h1, p {
        color: #f5f3f0;
        padding: 10px;
        margin: 0;
    }

    p {
        font-weight: 400;
        text-align: justify;
    }

    @media only screen and (max-width: 576px) {
        h1 {
            font-size: 2rem;
        }
    }
`;

export const Offer = styled.div`
    padding: 1.8rem 0 1rem 0;
    margin: 0;
    background: rgb(31,109,189);
    background: linear-gradient(45deg, rgba(31,109,189,1) 0%, rgba(41,148,255,1) 100%);
    transform: translateY(-5rem);

    .container {
        color: whitesmoke;
    }

    .fa-clock {
        font-size: 4.5rem;
    }
`;