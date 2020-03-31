import styled from '@emotion/styled'

export const SFooter = styled.footer`
    .site-footer {
        background-color: #c7dfff;
        padding: 1rem 0;
        font-size:15px;
        line-height:24px;
        color: black;
    }

    .site-footer a {
        color: black;
    }

    .site-footer a:hover {
        color: black;
        text-decoration: underline
    }

    .copyright-text {
        margin:0
    }


    @media (max-width:767px) {
        .site-footer {
            padding-bottom:0;
        }

        .site-footer .copyright-text,.site-footer .social-icons {
            text-align:center
        }
    }
`;