import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'
import Jumbotron from '../components/Jumbotron'

export const query = graphql`
    query {
        file(relativePath: {eq: "background.png"}) {
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
    <SEO title="Home" keywords={[`coronavirus face shield`, `covid-19 mask`, `face shield`, `3m face shield`]} />
    <Jumbotron
      title={data.site.siteMetadata.product}
      subTitle={data.site.siteMetadata.description}
      imageUrl={data.file.childImageSharp.fluid.originalImg}
    />

    <div className="container mb-5 mt-5">
      <ProductGrid />
    </div>
  </>
)

export default IndexPage;
