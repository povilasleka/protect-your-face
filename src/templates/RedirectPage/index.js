import React from 'react'
import { graphql } from 'gatsby'

const RedirectPage = ({ data }) => {
    return (
        <>
            Shield4face.com
            <h1>Buy Face Protection Shield. Fast Shipping</h1>
            <p>Professional shields for the face are engineered to be comfortable, convenient, and functional to keep your face protected.
            Wear it if there is a risk to get infected by a disease or if you might pass it on others.
    Faceshield K95 has CE certification.</p>
        </>
    );
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                seotitle
                description
            }
        }
    }
`;

export default RedirectPage;