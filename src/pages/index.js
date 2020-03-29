import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'
import Jumbotron from '../components/Jumbotron'

export const query = graphql`
    query {
        file(relativePath: {eq: "background.jpg"}) {
            childImageSharp {
                fluid {
                    originalImg
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

const IndexPage = ({ data }) => (
  <>
    <Jumbotron
      title={data.site.siteMetadata.product}
      subTitle={data.site.siteMetadata.description}
      imageUrl={data.file.childImageSharp.fluid.originalImg}
    />

    <div className="container">
      <SEO title="Home" keywords={[`coronavirus`, `covid-19`, `face mask`, `mask`, `antivirus mask`]} />
      <ProductGrid />
    </div>
  </>
)

export default IndexPage;
