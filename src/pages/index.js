import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import ProductGrid from '../components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Shopify store</h1>
    <p>Lets make some money from <b>quarantine!😈😈😈</b></p><br />
    <ProductGrid />
  </>
)

export default IndexPage
