import styled, { css, DefaultTheme } from 'styled-components'
import { CheckBoxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 2rem;
    height: 2rem;
    border: 0.2rem solid ${theme.colors.grey};
    border-radius: 0.5rem;
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;
    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.blue};
    }
    &:checked {
      border-color: ${theme.colors.blue};
      background: ${theme.colors.blue};
      &:before {
        opacity: 1;
      }
    }
  `}
`

const labelModiffiers = {
  title: (theme: DefaultTheme) => css`
    color: ${theme.colors.title};
  `,
  grey: (theme: DefaultTheme) => css`
    color: ${theme.colors.grey};
  `
}

export const Label = styled.label<Pick<CheckBoxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    line-height: 2rem;
    ${!!labelColor && labelModiffiers[labelColor!](theme)};
  `}
`
