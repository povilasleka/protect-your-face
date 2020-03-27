import React from 'react'

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
    }
`;

const IndexPage = ({ data }) => (
  <>
    <Jumbotron
      title="Protect your face"
      subTitle="KN95 CE Certification Face Mask will keep you safe from viruses!"
      imageUrl={data.file.childImageSharp.fluid.originalImg}
    />

    <div className="container">
      <SEO title="Home" keywords={[`coronavirus`, `covid-19`, `face mask`, `mask`, `antivirus mask`]} />
      <ProductGrid />
    </div>
  </>
)

export default IndexPage;
