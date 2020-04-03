import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'
import Jumbotron from '../components/Jumbotron'
import useKeywords from '../hooks/use-keywords'

export const query = graphql`
    query {
      allFile(filter: { relativePath: { regex: "/background/" }}) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
      site {
        siteMetadata {
          description
          product
        }
      }
    }
`;

const IndexPage = ({ data, location }) => {
  const keywords = useKeywords();

  return (
    <>
      <SEO title="Home" keywords={keywords.indexPage} pathName={location} />
      <Jumbotron imageUrl={data.allFile.nodes[1].childImageSharp.fluid}
        imageUrlMobile={data.allFile.nodes[0].childImageSharp.fluid} />

      <div className="container mb-5 mt-5">
        <ProductGrid />
      </div>
    </>
  )
}

export default IndexPage;
