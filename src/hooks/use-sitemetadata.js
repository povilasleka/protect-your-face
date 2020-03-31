import { graphql, useStaticQuery } from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    seotitle
                    product
                    description
                    author
                    siteUrl
                    footer {
                        authorWebsite
                    }
                }
            }
        }
    `);

    return data.site.siteMetadata;
}