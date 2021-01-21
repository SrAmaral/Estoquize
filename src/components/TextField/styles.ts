import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.inputbgf};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0;
    border-radius: 1rem;
    border-color: ${theme.colors.blue};
    transition: all ${theme.transition.fast};

    &:focus-within {
      background: ${theme.colors.inputbg};
      border: 0.1rem solid ${theme.colors.blue};
      box-shadow: 0 0 0.5rem ${theme.colors.blue};

      ${Label} {
        display: none;
      }
    }
  `}
`

export const ContentInput = styled.div`
  ${({ theme }) => css`
    height: 5.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: ${theme.spacings.xxsmall} 0;
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
    margin-top: 0.5rem;
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.grey};
    cursor: pointer;
    transition: all 1s;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.grey};
    order: ${iconPosition === 'right' ? 1 : 0};
    margin-right: ${theme.spacings.xsmall};
    svg {
      width: 2.2rem;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.grey};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
