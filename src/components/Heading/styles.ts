import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const WrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: 3.6rem;
    font-weight: ${theme.font.bold};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, size }) => css`
    ${!!size && WrapperModifiers[size](theme)};
  `}
`
