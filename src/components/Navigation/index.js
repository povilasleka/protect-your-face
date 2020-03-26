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
import useSiteMetadata from '../../hooks/use-sitemetadata'

const useQuantity = () => {
	const { store: { checkout } } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ handleCartClick }) => {
	const [hasItems, quantity] = useQuantity();
	const { title } = useSiteMetadata();

	return (
		<Wrapper className="navbar">
			<Container className="container">
				<MenuLink to='/'>
					{title}
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
