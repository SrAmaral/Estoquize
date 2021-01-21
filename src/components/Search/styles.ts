import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > input {
      height: 2.4rem;
      background: none;
      border: 0;
      margin-left: 1rem;
      color: ${theme.colors.grey};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      outline: none;

      &::placeholder {
        color: ${theme.colors.grey};
      }
    }
  `}
`
