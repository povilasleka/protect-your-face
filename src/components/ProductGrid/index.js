import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// @ts-ignore
import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag,
  TagSub,
  CardText,
  CardLink
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
                compareAtPrice
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
            <CardLink to={`/product/${handle}/`}>
              <div className="card">
                  {firstImage && firstImage.localFile &&
                    (<Img className="card-img-top"
                      fluid={firstImage.localFile.childImageSharp.fluid}
                      alt={handle}
                    />)}
                <hr />
                <div className="card-body" style={{ marginTop: 0 }}>
                  <Title className="card-text">{title}</Title>
                  <CardText>Price: </CardText>
                  <PriceTag className="card-text" style={{ textDecoration: 'line-through' }}>{getPrice(firstVariant.compareAtPrice)}</PriceTag>
                  <br />
                  <CardText>Promo price: </CardText>
                  <strong>
                    <PriceTag className="card-text"> {getPrice(firstVariant.price)}</PriceTag>
                    <TagSub> + Free Shipping</TagSub>
                  </strong>
                  <br />
                  <CardText>5-10 days delivery to EU.</CardText>
                </div>
              </div>
            </CardLink>
          </Product>
        ))
        : <p>No Products found!</p>}
    </Grid>
  )
}

export default ProductGrid
