import styled from '@emotion/styled'

export const SFooter = styled.footer`
    .site-footer {
        background-color: #242D34;
        padding: 1rem 0;
        font-size:15px;
        line-height:24px;
        color: whitesmoke;
    }

    .site-footer a {
        color: whitesmoke;
    }

    .site-footer a:hover {
        color: whitesmoke;
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