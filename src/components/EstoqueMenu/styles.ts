import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { EstoqueMenuProps } from '.'

export const Wrapper = styled.main`
  ${media.lessThan('medium')`
      margin-top: 3rem;
      margin-bottom: 3rem;
    `}
`

export const ButtonModiffier = {
  selected: (theme: DefaultTheme) => css`
    border: 0;
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
  `
}

export const BtnProduto = styled.button<EstoqueMenuProps>`
  ${({ theme, selected }) => css`
    width: 12rem;
    height: 4.5rem;
    background: ${theme.colors.white};
    border: 0;
    border-right: 1px solid ${theme.colors.background};
    border-radius: 2.5rem 0 0 2.5rem;
    outline: none;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.title};
    cursor: pointer;

    ${selected === 'estoque' && ButtonModiffier.selected(theme)}
  `}
`
export const BtnSaida = styled.button<EstoqueMenuProps>`
  ${({ theme, selected }) => css`
    width: 12rem;
    height: 4.5rem;
    background: ${theme.colors.white};
    border: 0;
    border-right: 1px solid ${theme.colors.background};
    outline: none;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.title};
    cursor: pointer;

    ${selected === 'saida' && ButtonModiffier.selected(theme)}
  `}
`
export const BtnEntrada = styled.button<EstoqueMenuProps>`
  ${({ theme, selected }) => css`
    width: 12rem;
    height: 4.5rem;
    background: ${theme.colors.white};
    border: 0;
    border-radius: 0 2.5rem 2.5rem 0;
    outline: none;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.title};
    cursor: pointer;

    ${selected === 'entrada' && ButtonModiffier.selected(theme)}
  `}
`
