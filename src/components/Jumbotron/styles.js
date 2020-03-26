import styled from '@emotion/styled'

export const Wrapper = styled.div`
    background-image: url('https://image.shutterstock.com/z/stock-photo-as-part-of-the-operations-of-a-coronavirus-mobile-testing-unit-a-healthcare-worker-dressed-in-full-1675328320.jpg');

    @media only screen and (min-width: 576px) {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
    }

    background-size: cover;
    height: 400px;
    margin-bottom: 0;
    padding: 0;


    .container {
        position: relative;
        transform: translateY(-17rem);
    }

    h1, p {
        color: #f5f3f0;
        padding: 10px;
        margin: 0;
    }

    h1 {
        border-radius: 5px 5px 0 0;
    }

    p {
        border-radius: 0 5px 5px 5px;
    }
`;