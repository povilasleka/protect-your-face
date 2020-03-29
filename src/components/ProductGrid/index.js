import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

// @ts-ignore
import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag
} from './styles'
// @ts-ignore
import { Img } from '~/utils/styles'

const ProductGrid = () => {
  const { store: { checkout } } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
    <Grid>
      {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, title, images: [firstImage], variants: [firstVariant] } }) => (
          <Product key={id}>
            <div className="card">
              <Link to={`/product/${handle}/`}>
                {firstImage && firstImage.localFile &&
                  (<Img className="card-img-top"
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  />)}
              </Link>
              <hr />
              <div className="card-body" style={{ marginTop: 0 }}>
                <h5 className="card-text">{title}</h5>
                <p className="card-text">From {getPrice(firstVariant.price)}</p>
              </div>
            </div>
          </Product>
        ))
        : <p>No Products found!</p>}
    </Grid>
  )
}

export default ProductGrid
