import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '../../context/StoreContext'
import {
	CartCounter,
	Container,
	MenuLink,
	Wrapper,
	MenuButton
} from './styles'

const useQuantity = () => {
	const { store: { checkout } } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle, handleCartClick }) => {
	const [hasItems, quantity] = useQuantity()

	return (
		<Wrapper className="navbar fixed-top">
			<Container className="container">
				<MenuLink to='/'>
					{siteTitle}
				</MenuLink>
				<MenuButton onClick={handleCartClick} className="btn btn-link">
					<i className="fas fa-shopping-cart"></i>
					{hasItems &&
						<CartCounter>
							{quantity} Item
						</CartCounter>
					}
				</MenuButton>
			</Container>
		</Wrapper>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
