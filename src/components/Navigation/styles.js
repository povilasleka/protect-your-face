import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: rgba(66, 122, 244, .8);
  z-index: 10;
`

export const Container = styled.div`
  justify-content: space-between;
  align-items: baseline;

`

export const MenuLink = styled(Link)`
  color: whitesmoke;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: .5rem 0;
  transform: translateY(.3rem);

  &:hover {
    color: whitesmoke;
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const MenuButton = styled.div`
  color: whitesmoke;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;

  &:hover {
    color: whitesmoke;
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const CartCounter = styled.span`
  background-color: whitesmoke;
  color: rgb(66, 122, 244);
  border-radius: 0px;
  padding: 0 6px;
  font-size: .7rem;
  float: right;
  margin: 10px;
  z-index: 20;
`






