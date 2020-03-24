import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: rebeccapurple;

`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 1rem;
`

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;

  &:hover {
    color: white;
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const MenuButton = styled.div`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;

  &:hover {
    color: white;
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 0px;
  padding: 0 6px;
  font-size: .7rem;
  float: right;
  margin: 10px;
  z-index: 20;
`






