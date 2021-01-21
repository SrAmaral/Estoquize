import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
`

export const Menu = styled.div`
  ${({ theme }) => css`
    max-width: 20rem;
    background: blue;
    ${media.greaterThan('large')`
    max-width: 25rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    background: ${theme.colors.background};
  `}
`
