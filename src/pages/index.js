import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'
import Jumbotron from '../components/Jumbotron'
import useKeywords from '../hooks/use-keywords'

export const query = graphql`
    query {
      file(relativePath: {eq: "background.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
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
    <Jumbotron
      title={data.site.siteMetadata.product}
      subTitle={data.site.siteMetadata.description}
      imageUrl={data.file.childImageSharp.fluid}
    />

    <div className="container mb-5 mt-5">
      <ProductGrid />
    </div>
  </>
)}

export default IndexPage;
