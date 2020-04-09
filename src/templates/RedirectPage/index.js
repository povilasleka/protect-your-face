import React from 'react'
import SEO from '../../components/seo'
import useSiteMetadata from '../../hooks/use-sitemetadata'
import useKeywords from '../../hooks/use-keywords'
import {Link} from 'gatsby'

const RedirectPage = () => {
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
                <p>{metadata.description}</p>
            </section>
        </>
    );
}

export default RedirectPage;