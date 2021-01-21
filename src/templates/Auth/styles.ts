import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as TextFieldStyles from 'components/TextField/styles'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1.3fr;
  `}
`
export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/bannerLogin.png);
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};
    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`
export const BannerContent = styled.div`
  ${({ theme }) => css`
    margin-top: 15rem;
    color: ${theme.colors.white};
    position: relative;
    z-index: ${theme.layers.base};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    /* font-family: Poppins; */
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    /* font-family: Poppins; */
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.bold};
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 30rem;
    height: 30rem;
    padding: ${theme.spacings.medium};
    background: ${theme.colors.white};
    margin-top: ${theme.spacings.xxlarge};
    border-radius: 2rem;
    filter: drop-shadow(0px 4px 26px rgba(0, 0, 0, 0.1));
    justify-content: space-between;

    ${media.greaterThan('huge')`
      width: 48rem;
      height: 40rem;
      padding: ${theme.spacings.xlarge};
  `}

    >Button {
      margin-top: ${theme.spacings.xsmall};
      justify-self: center;
    }

    /* ${TextFieldStyles.Wrapper} {
      margin-top: 0.5rem;
    } */
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
      width: 10rem;
    }
  `}
`
