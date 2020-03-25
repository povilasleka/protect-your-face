import React, { useContext } from 'react'

import StoreContext from '../../../context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
      option => `${option.name}: ${option.value} `
    )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <Wrapper>
      <div className="col" style={{ transform: 'translateY(20%)' }}>
        {variantImage}
      </div>

      <div className="col">
        {line_item.title}
      </div>
      <div className="col">
        {line_item.quantity} pcs.
      </div>
      <div className="col">
        <button onClick={handleRemove} style={{
          background: 'none',
          border: 'none',
          fontSize: '1.2rem',
          color: '#DC0000',
          outline: 'none'
        }}><i className="fas fa-trash-alt"></i></button>
      </div>
    </Wrapper>
  )
}

export default LineItem
