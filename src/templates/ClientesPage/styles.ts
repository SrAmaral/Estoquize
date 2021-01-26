import { ListProps } from 'components/List'
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.medium};
  `}
`
export const Header = styled.div`
  max-height: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Menu = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: row;
    margin-top: ${theme.spacings.medium};
    justify-content: space-between;

    ${media.lessThan('medium')`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  `}
`
export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;

    > p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.grey};
      margin-left: ${theme.spacings.xxsmall};
      margin-bottom: 0.3rem;
    }
  `}
`

export const Filters = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
  `}
`
export const Select = styled.select`
  ${({ theme }) => css`
    appearance: none;
    background: none;
    width: 15rem;
    height: 4.5rem;
    border: 1px solid ${theme.colors.grey};
    border-radius: 2.5rem;
    outline: none;
    padding: 1rem;
    font-family: Ubuntu;
    font-weight: ${theme.font.regular};
    color: ${theme.colors.subtitle};
    cursor: pointer;

    > option {
      background: ${theme.colors.background};
      font-family: Ubuntu;
      font-weight: ${theme.font.regular};
      color: ${theme.colors.subtitle};
    }
  `}
`

export const Date = styled.input`
  ${({ theme }) => css`
    appearance: none;
    background: none;
    width: 15rem;
    height: 4.5rem;
    border: 1px solid ${theme.colors.grey};
    border-radius: 2.5rem;
    outline: none;
    padding: 0 0.8rem;
    margin-left: 1rem;
    font-weight: ${theme.font.regular};
    font-family: Ubuntu;
    color: ${theme.colors.subtitle};
    cursor: pointer;
  `}
`
