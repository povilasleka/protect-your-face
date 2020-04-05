import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import useSiteMetadata from '../../hooks/use-sitemetadata'
import useKeywords from '../../hooks/use-keywords'

const RedirectPage = ({ data }) => {
    const metadata = useSiteMetadata();
    const keywords = useKeywords();

    return (
        <>
            <SEO
                description={metadata.description}
                title={metadata.title}
                keywords={keywords.indexPage}
            />
            <section style={{ opacity: '0' }}>
                <h1>{metadata.seotitle}</h1>
            </section>
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