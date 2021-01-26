import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.medium};
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0.7rem;

      border-radius: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      ${({ theme }) => css`
        background: ${theme.colors.blue};
        border-radius: 1rem;
      `}
    }
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
export const CardList = styled.div`
  ${({ theme }) => css`
    margin-top: 4rem;
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: inherit;
    grid-row-gap: 5rem;
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-self: center;
    align-items: center;
    flex-direction: column;
    width: 30rem;
    height: 40rem;
    background: #ffffff;
    border-radius: 1rem;
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.1);
    padding: ${theme.spacings.medium};
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 10rem;
    margin-bottom: 1rem;
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    margin-top: 0.5rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.grey};
    margin-bottom: 3rem;
  `}
`
export const Descripion = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.grey};
    text-align: center;
    max-height: 100ch;

    ///////////////////////
    overflow: hidden;
    text-overflow: ellipsis;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 0rem;
    }
  `}
`
