import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = Pick<ButtonProps, 'size' | 'radius' | 'hasHover'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
  `,
  default: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  full: (theme: DefaultTheme) => css`
    width: 100%;
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  hasHover: (theme: DefaultTheme) => css`
    ${({ theme }) => css`
      &:hover {
        background: none;
        color: ${theme.colors.blue};
        border: 1px solid ${theme.colors.blue};
      }
    `}
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, hasHover, disabled, radius }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${radius}px;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    transition: all ${theme.transition.default};

    ${!!size && wrapperModifiers[size](theme)};
    ${disabled && wrapperModifiers.disabled()};
    ${hasHover && wrapperModifiers.hasHover(theme)};
  `}
`
