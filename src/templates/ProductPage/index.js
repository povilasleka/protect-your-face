import React from 'react'
import { graphql } from 'gatsby'

// @ts-ignore
import SEO from '~/components/seo'
// @ts-ignore
import ProductForm from '~/components/ProductForm'
import {
  Img,
  Wrapper,
  // @ts-ignore
} from '~/utils/styles'
import {
  //ProductTitle,
  ProductDescription,
} from './styles'


const ProductPage = ({ data }) => {
  const product = data.shopifyProduct;
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Wrapper className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            {product.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
              />
            ))}
          </div>
          <div className="col-md-6 col-sm-12">
            <h2>{product.title}</h2>
            <ProductForm product={product} />
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        compareAtPrice
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
