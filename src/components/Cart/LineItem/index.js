import React, { useContext } from 'react'

import StoreContext from '../../../context/StoreContext'

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

  /*const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
      option => `${option.name}: ${option.value} `
    )
    : null*/

  const handleRemove = () => {
    console.log(line_item.id);
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <tr>
      <td>
        {variantImage}
      </td>

      <td>
        {line_item.title}
      </td>
      <td>
        {line_item.quantity} {line_item.quantity == 1 ? 'Unit' : 'Units'}
      </td>
      <td>
        <button onClick={handleRemove} style={{
          background: 'none',
          border: 'none',
          fontSize: '1.2rem',
          color: 'red',
          outline: 'none'
        }}><i className="fas fa-trash-alt"></i></button>
      </td>
    </tr>
  )
}

export default LineItem
