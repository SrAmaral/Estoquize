import styled, { css, DefaultTheme } from 'styled-components'
import { lighten } from 'polished'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20rem;
    height: 100vh;
    padding: 8rem 0;
    background: ${theme.colors.white};
    box-shadow: 5px 0px 20px 2px rgba(0, 0, 0, 0.1);

    ${media.greaterThan('large')`
      width: 25rem;
    `}
  `}
`
export const Menu = styled.div``
export const Header = styled.div``
export const Fotter = styled.div``

type ImageProps = {
  image?: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, image }) => css`
    margin-left: ${theme.spacings.small};
    width: 75px;
    height: 75px;
    background-image: url(${image});
    background-size: cover;
    background-position: center center;
    border-radius: 50px;
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
    margin-top: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xlarge};
    font-family: Ubuntu;
    color: ${theme.colors.title};
  `}
`
export const SubTitle = styled.h3`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    font-family: Ubuntu;
    color: ${theme.colors.grey};
    font-weight: ${theme.font.normal};
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xlarge};
  `}
`

export const Marker = styled.div`
  ${({ theme }) => css`
    position: fixed;
    margin-left: 0.2rem;
    left: 0;
    width: 0.4rem;
    height: 3.5rem;
    border-radius: 0.2rem;
  `}
`
const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
  `,

  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.blue};
  `
}

type LinkProps = {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};

    > img {
      width: 1.8rem;
      margin-right: 1.5rem;
      transition: all ${theme.transition.fast};
    }

    > span {
      color: ${theme.colors.grey};
      font-size: ${theme.font.sizes.medium};
      transition: all ${theme.transition.fast};
    }

    &:hover {
      > img {
        transform: scale(1.1);
      }

      > span {
        transform: scale(1.1);
      }
    }

    ${Marker} {
      ${!isActive && linkModifiers.default(theme)};
      ${isActive && linkModifiers.active(theme)};
    }
  `}
`

export const LogOut = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: ${theme.spacings.small};

    > img {
      width: 1.8rem;
      margin-right: 1.5rem;
      transition: all ${theme.transition.fast};
    }

    > span {
      color: ${theme.colors.grey};
      font-size: ${theme.font.sizes.medium};
      transition: all ${theme.transition.fast};
    }

    &:hover {
      > img {
        transform: scale(1.1);
      }

      > span {
        transform: scale(1.1);
      }
    }
  `}
`
