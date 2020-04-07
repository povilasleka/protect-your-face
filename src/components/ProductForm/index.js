import React, { useState, useContext, useEffect, useCallback } from 'react'
//import find from 'lodash/find'
//import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'

// @ts-ignore
import StoreContext from '~/context/StoreContext'
import { OutOfStock, InStock, BuyButton, QuantityInput } from './styles'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import { navigate } from 'gatsby'

const ProductForm = ({ product }) => {
  const {
    //options,
    //variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, /*setVariant*/] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState("1")
  const [disabled, setDisabled] = useState(false);
  const {
    addVariantToCart,
    store: { client, adding, checkout },
  } = useContext(StoreContext);

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId/*, variants*/]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity);
    navigate("/cart/");
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price)

  const oldPrice = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.compareAtPrice)

  const intl = useIntl();

  return (
    <>
      <div>
        <p style={{
          display: 'inline',
          marginRight: '.8rem',
          fontSize: '1.5rem',
          // @ts-ignore
          fontWeight: '500',
          lineHeight: '0px'
        }}>{price}</p>
        {variant.compareAtPrice > 0 && <p style={{
          display: 'inline',
          color: 'red',
          textDecoration: 'line-through',
          fontSize: '1.2rem'
        }}>{oldPrice}</p>}
      </div>

      {!available ? <OutOfStock><FormattedMessage id="outOfStockLabel" /></OutOfStock> : <InStock><FormattedMessage id="inStockLabel" /></InStock>}
      <br />
      <label htmlFor="quantity">Minimum order qty. </label>
      <QuantityInput className="form-control"
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        step="1"
        onChange={handleQuantityChange}
        value={quantity}
      />

      <BuyButton
        className="btn btn-success"
        type="submit"
        disabled={disabled || adding}
        onClick={handleAddToCart}
      >
        <FormattedMessage id="addToCartButton" />
      </BuyButton>
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        compareAtPrice: PropTypes.string,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
