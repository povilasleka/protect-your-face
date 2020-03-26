import styled from '@emotion/styled'

export const Wrapper = styled.div`
    background-image: url('https://image.shutterstock.com/z/stock-photo-as-part-of-the-operations-of-a-coronavirus-mobile-testing-unit-a-healthcare-worker-dressed-in-full-1675328320.jpg');
    background-size: cover;
    height: 500px;
    margin-bottom: 0;


    .container {
        position: relative;
        margin-top: 25px;
        top: 50%;
        transform: translateY(-50%);
    }

    h1, p {
        color: #f5f3f0;
        background: rgba(38,39,43, .6);
        padding: 10px;
        margin: 0;
        text-align: center;
        display: inline-block;
    }

    h1 {
        border-radius: 5px 5px 0 0;
    }

    p {
        border-radius: 0 5px 5px 5px;
    }
`;