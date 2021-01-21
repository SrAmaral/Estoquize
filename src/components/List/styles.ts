import styled, { css, DefaultTheme } from 'styled-components'
import { ListProps } from '.'

export const Wrapper = styled.main``

export const Subtitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${theme.spacings.xsmall};

    ${Id} {
      > p {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.light};
        color: ${theme.colors.grey};
      }
    }

    ${Name} {
      > p {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.light};
        color: ${theme.colors.grey};
      }
    }
  `}
`

export const ListCards = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 0px 29px 1px rgba(0, 0, 0, 0.1);
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    align-items: center;
    height: 7rem;
    background: #ffffff;
    padding: ${theme.spacings.xsmall};

    &:first-of-type {
      border-radius: 15px 15px 0 0;
    }

    &:last-of-type {
      border-radius: 0 0 15px 15px;
    }

    &:hover {
      cursor: pointer;
      background: #f7f8fa;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        height: 7rem;
        border-radius: 15px;
        width: 5px;
        background: ${theme.colors.blue};
      }
    }
  `}
`
export const Checker = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};
  `}
`
export const Id = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};
    > p {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.light};
      color: ${theme.colors.grey};
    }
  `}
`
export const Name = styled.div`
  ${({ theme }) => css`
    flex: 1;
    margin: 0 ${theme.spacings.small};
    min-width: 10rem;
    > p {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.title};
      /////////////////////////////

      max-width: 25ch;

      ///////////////////////
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `}
`

const quantityModiffiers = {
  produto: (theme: DefaultTheme, quantity: number) => css`
    background: ${quantity <= 10
      ? theme.colors.red
      : quantity <= 20
      ? theme.colors.yellow
      : theme.colors.green};
    border-radius: 1.5rem;
    > p {
      color: ${theme.colors.white};
    }
  `,
  saida: (theme: DefaultTheme) => css`
    justify-content: flex-start;
    align-items: center;
    max-width: 6rem;
    min-width: 3rem;

    > p {
      color: ${theme.colors.grey};
    }
  `,
  entrada: (theme: DefaultTheme) => css`
    justify-content: flex-start;
    align-items: center;
    max-width: 6rem;
    min-width: 3rem;
    > p {
      color: ${theme.colors.grey};
    }
  `,
  undefined: (theme: DefaultTheme) => css`
    > p {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      color: ${theme.colors.grey};
    }
  `
}

type QuantityProps = Pick<ListProps, 'quantityType' | 'quantity'>

export const Quantity = styled.div<QuantityProps>`
  ${({ theme, quantityType, quantity }) => css`
    ${({ theme }) => css`
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      max-width: 10rem;
      min-width: 7rem;
      height: 4rem;
      margin: 0 ${theme.spacings.medium};
      > p {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.normal};
        color: ${theme.colors.title};
      }
      > img {
        margin-right: ${theme.spacings.xxsmall};
      }
      ${quantityType === 'produtos' &&
      quantityModiffiers.produto(theme, quantity)}
      ${quantityType === 'saida' && quantityModiffiers.saida(theme)}
      ${quantityType === 'entrada' && quantityModiffiers.entrada(theme)}
      ${quantityType === undefined && quantityModiffiers.undefined(theme)}
    `}
  `}
`
export const Data = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    margin: 0 ${theme.spacings.medium};
    > p {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      color: ${theme.colors.grey};
    }
  `}
`
export const Locator = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 0 ${theme.spacings.medium};
    > p {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      color: ${theme.colors.grey};
    }
  `}
`
export const Local = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 0 ${theme.spacings.medium};
    > p {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      color: ${theme.colors.grey};
    }
  `}
`
