import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 1.1rem;
  line-height: 1.2rem;
  font-weight: 400;
  color: black;

  &:hover {
    color: black;
  }
`

export const PriceTag = styled.p`
  display: inline;
  color: red;
`

export const TagSub = styled.p`
  display: inline;
  color: green;
`;

export const CardText = styled.p`
  color: grey;
  display: inline;
`;

export const CardLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;