import React from 'react'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`coronavirus`, `covid-19`, `face mask`, `mask`, `antivirus mask`]} />
    <h1>Shopify store</h1>
    <p>Lets make some money out of <b>quarantine!😈😈😈</b></p><br />
    <ProductGrid />
  </>
)

export default IndexPage
