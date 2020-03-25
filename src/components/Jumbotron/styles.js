import styled from '@emotion/styled'

export const Wrapper = styled.div`
    background-image: url('https://image.shutterstock.com/z/stock-photo-as-part-of-the-operations-of-a-coronavirus-mobile-testing-unit-a-healthcare-worker-dressed-in-full-1675328320.jpg');
    background-size: cover;
    height: 500px;


    .container {
        position: relative;
        margin-top: 25px;
        top: 50%;
        transform: translateY(-50%);
    }

    h1, p {
        color: #f5f3f0;
        text-shadow: 3px 3px 14px rgba(0,0,0,0.5);
    }
`;