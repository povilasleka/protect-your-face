import React, { useContext, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import Img from 'gatsby-image'
import { LeftButton, RightButton } from '../SlideShow/styles'

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

const ProductGrid = () => {
  const intl = useIntl();
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

  const [image, setImage] = useState(0);

  const handleNext = () => {
    image === 2 ? setImage(0) : setImage(image + 1);
  }

  const handlePrevious = () => {
    image === 0 ? setImage(2) : setImage(image - 1);
  }

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
                <div className="card-body" style={{ marginTop: 0 }}>
                  <Title className="card-text">{title}</Title>
                  <CardText><FormattedMessage id="cardPrice" /> </CardText>
                  <PriceTag className="card-text" style={{ textDecoration: 'line-through' }}>{getPrice(firstVariant.compareAtPrice)}</PriceTag>
                  <br />
                  <CardText><FormattedMessage id="cardPromoPrice" /> </CardText>
                  <strong>
                    <PriceTag className="card-text"> {getPrice(firstVariant.price)}</PriceTag>
                    <TagSub> + {intl.formatMessage({ id: "cardFreeShipping" })} </TagSub>
                  </strong>
                  <br />
                  <CardText><FormattedMessage id="cardTimeOfDelivery" /> </CardText>
                  <br /><br />
                  <button className="btn btn-success">{intl.formatMessage({ id: "buyProductButton" })}</button>
                </div>
              </div>
              </CardLink>
          </Product>
        ))
        : <p>No Products found!</p>}
    </Grid >
  )
}

export default ProductGrid
