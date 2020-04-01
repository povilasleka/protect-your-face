import React from 'react'
import { graphql } from 'gatsby'
import Cookie from 'universal-cookie'

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
  ProductTitle,
  ProductDescription,
} from './styles'

import useContentParser from '../../hooks/use-contentparser'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct;
  const cookies = new Cookie();
  const localLangDescription = 
    useContentParser(cookies.get('language'), product.descriptionHtml);

  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Wrapper className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            {product.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
              />
            ))}
          </div>
          <div className="col-md-5 col-sm-12">
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: localLangDescription }}
            />
          </div>
          <div className="col-md-3 col-sm-12 card">
            <div className="card-body">
              <ProductForm product={product} />
            </div>
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
