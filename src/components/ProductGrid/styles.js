import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'


export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px){
    grid-template-columns: repeat(1, 1fr);
  }

  margin-bottom: 2rem;
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 1.1rem;
  line-height: 0px;
  font-weight: 400;
`

export const PriceTag = styled.p`
  display: inline;
  color: red;
`

export const TagSub = styled.p`
  display: inline;
  color: limegreen;
  font-weight: 300;
`;