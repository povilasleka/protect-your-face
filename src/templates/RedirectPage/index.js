import React from 'react'
import { graphql } from 'gatsby'

const RedirectPage = ({ data }) => {
    return (
        <>
            <h1>{data.site.siteMetadata.seotitle}</h1>
            <p>{data.site.siteMetadata.description}</p>
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