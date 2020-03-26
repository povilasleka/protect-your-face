import { graphql, useStaticQuery } from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    footer {
                        authorWebsite
                    }
                }
            }
        }
    `);

    return data.site.siteMetadata;
}