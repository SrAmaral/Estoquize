import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as MenuStyle from '../../components/Menu/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    justify-content: space-between;
    background: ${theme.colors.background};
  `}
`

export const Menu = styled.div`
  ${({ theme }) => css``}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    background: ${theme.colors.background};
    margin-left: ${MenuStyle.Wrapper};
  `}
`
