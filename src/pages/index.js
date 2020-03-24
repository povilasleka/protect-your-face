import React from 'react'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'
import Jumbotron from '../components/Jumbotron'

const IndexPage = () => (
  <>
    <Jumbotron
      title="Protect your face"
      subTitle="KN95 CE Certification Face Mask will keep you safe from viruses!"
      imageUrl=""
    />

    <div className="container">
      <SEO title="Home" keywords={[`coronavirus`, `covid-19`, `face mask`, `mask`, `antivirus mask`]} />
      <h1>Shopify store</h1>
      <p>Lets make some money out of <b>quarantine!😈😈😈</b></p><br />
      <ProductGrid />
    </div>
  </>
)

export default IndexPage;
