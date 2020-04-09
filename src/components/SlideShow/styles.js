import styled from '@emotion/styled'

export const Button = styled.button`
    position: relative;
    height: 100%;
    width: 50%;
    background: none;
    border: none;
    color: rgba(102, 102, 102, .7);

    font-size: 2rem;

    &:active {
        outline: none;
    }

    &:hover {
        color: rgba(102, 102, 102, 1);
    }
`;

export const RightButton = styled(Button)`
    float: right;
    padding-left: 30%;
`;

export const LeftButton = styled(Button)`
    float: left;
    padding-right: 30%;
`;