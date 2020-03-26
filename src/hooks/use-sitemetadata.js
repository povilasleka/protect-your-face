import { graphql, useStaticQuery } from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    authorWebsite
                }
            }
        }
    `);

    return data.site.siteMetadata;
}