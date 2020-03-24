import React from 'react'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'

const IndexPage = () => (
  <>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Protect your face</h1>
        <p className="lead">
          KN95 CE Certification Face Mask will keep you safe from viruses!
                </p>
      </div>
    </div>
    <div className="container">
      <SEO title="Home" keywords={[`coronavirus`, `covid-19`, `face mask`, `mask`, `antivirus mask`]} />
      <h1>Shopify store</h1>
      <p>Lets make some money out of <b>quarantine!😈😈😈</b></p><br />
      <ProductGrid />
    </div>
  </>
)

export default IndexPage;
