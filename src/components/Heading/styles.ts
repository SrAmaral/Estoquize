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
  `,
  subTitle: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.regular};
  `
}

const TextModifiers = {
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.title};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  grey: (theme: DefaultTheme) => css`
    color: ${theme.colors.grey};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.colors.title};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}

    ${!!size && WrapperModifiers[size](theme)};
    ${!!color && TextModifiers[color](theme)};
  `}
`
