import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import {
	CartCounter,
	MenuLink,
	Wrapper,
	MenuButton
} from './styles'
import useSiteMetadata from '../../hooks/use-sitemetadata'
import LocaleSelector from '../LocaleSelector'

const Navigation = () => {
	const { title } = useSiteMetadata();

	return (
		<Wrapper className="navbar">
			<div className="container">
				<MenuLink to='/'>
					<h4>{title}</h4>
				</MenuLink>
				<LocaleSelector />
				{/*<MenuButton onClick={handleCartClick} className="btn btn-link">
					<i className="fas fa-shopping-cart"></i>
					{hasItems &&
						<CartCounter>
							{quantity} Item
						</CartCounter>
					}
				</MenuButton>*/}
			</div>
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
