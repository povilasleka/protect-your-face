import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import StoreContext from '../../context/StoreContext'
import { useMediaQuery } from 'react-responsive'
import useContentParser from '../../hooks/use-contentparser'
import CartIcon from '../../components/Cart/icon'

// @ts-ignore
import SEO from '~/components/seo'
// @ts-ignore
import ProductForm from '~/components/ProductForm'
import {
  Wrapper,
  // @ts-ignore
} from '~/utils/styles'
import {
  ProductTitle,
  ProductDescription,
} from './styles'

import SlideShow from '../../components/SlideShow'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct;
  const { locale, changeLocale } = useContext(StoreContext);
  const isMobile = useMediaQuery({ maxDeviceWidth: 576 });

  if (locale === 'undefined' && typeof window !== 'undefined') {
    if (document.URL.search('/en/') >= 0) changeLocale('en');
    if (document.URL.search('/it/') >= 0) changeLocale('it');
    if (document.URL.search('/es/') >= 0) changeLocale('es');
    if (document.URL.search('/de/') >= 0) changeLocale('de');
    if (document.URL.search('/fr/') >= 0) changeLocale('fr');
  }

  const localLangDescription = useContentParser(locale, product.descriptionHtml);

  return (
    <>
      <SEO title={product.title} description={product.description} />
      <CartIcon />
      <Wrapper className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <
              // @ts-ignore
              SlideShow images={product.images} />
            <br />
            <iframe title="Video" src="https://player.vimeo.com/video/405368373" width="100%" height="300" frameBorder="0" allow="autoplay; fullscreen"
                    allowFullScreen/>
          </div>
          <div className="col-md-5 col-sm-12">
            <ProductTitle>{product.title}</ProductTitle>
            {isMobile && (<div className="col-md-3 col-sm-12 card">
              <div className="card-body">
                <ProductForm product={product} />
              </div>
            </div>)}
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: localLangDescription }}
            />
          </div>

          {!isMobile && (<div className="col-md-3 col-sm-12 card">
            <div className="card-body">
              <ProductForm product={product} />
            </div>
          </div>)}
        </div>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    file(relativePath: {eq: "video.mov"}) {
      url
      publicURL
    }
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
