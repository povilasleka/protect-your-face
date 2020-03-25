import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: #f5f3f0;
  z-index: 10;
`

export const Container = styled.div`
  justify-content: space-between;
  align-items: baseline;

`

export const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: .5rem 0;

  &:hover {
    color: black;
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const MenuButton = styled.div`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;

  &:hover {
    color: black;
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const CartCounter = styled.span`
  background-color: black;
  color: #f5f3f0;
  border-radius: 0px;
  padding: 0 6px;
  font-size: .7rem;
  float: right;
  margin: 10px;
  z-index: 20;
`






