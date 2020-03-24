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
      <tr>
        <th>{variantImage}</th>
        <th>{line_item.title}</th>
        <th>{line_item.quantity} pcs.</th>
        <th>
          <button onClick={handleRemove} style={{
            background: 'none',
            border: 'none',
            fontSize: '1.2rem',
            color: '#DC0000',
            outline: 'none'
          }}><i className="fas fa-trash-alt"></i></button>
        </th>
      </tr>
    </Wrapper>
  )
}

export default LineItem
