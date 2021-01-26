import { MenuOutline as MenuIcon } from '@styled-icons/evaicons-outline/MenuOutline'
import { CloseOutline as CloseIcon } from '@styled-icons/evaicons-outline/CloseOutline'
import Link from 'next/link'
import theme from 'styles/theme'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'
import { useState } from 'react'

export type MenuProps = {
  activeLink?:
    | '/estoque'
    | '/funcionarios'
    | '/os'
    | '/clientes'
    | '/cronograma'
  imageUser?: string
  isOpen?: boolean
}

const Menu = ({
  activeLink,
  imageUser = 'img/userImage.png',
  isOpen = false
}: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(isOpen)

  console.log(menuOpen)

  return (
    <S.Wrapper isOpen={menuOpen}>
      <S.Menu>
        <S.DivButton isOpen={menuOpen}>
          {!menuOpen && (
            <S.Button onClick={() => setMenuOpen(!menuOpen)}>
              <MenuIcon size={30} color={theme.colors.grey} />
            </S.Button>
          )}
          {menuOpen && (
            <S.Button onClick={() => setMenuOpen(!menuOpen)}>
              <CloseIcon size={30} color={theme.colors.grey} />
            </S.Button>
          )}
        </S.DivButton>

        <MediaMatch greaterThan="medium">
          <S.Header>
            <S.Image image={imageUser}></S.Image>
            <S.Title>Adam Smith</S.Title>
            <S.SubTitle>Administração</S.SubTitle>
          </S.Header>
        </MediaMatch>

        <S.Nav>
          <Link href="/estoque" passHref>
            <S.Link isActive={activeLink === '/estoque'} title="Estoque">
              <S.Marker />
              <img
                src="img/icons/estoque-icon.svg"
                alt="Icone do menu de Estoque"
              />
              <MediaMatch greaterThan="medium">
                <span>Estoque</span>
              </MediaMatch>
            </S.Link>
          </Link>

          <Link href="/funcionarios" passHref>
            <S.Link
              isActive={activeLink === '/funcionarios'}
              title="Funcionários"
            >
              <S.Marker />
              <img
                src="img/icons/funcionario-icon.svg"
                alt="Icone do menu de funcionario"
              />
              <MediaMatch greaterThan="medium">
                <span>Funcionários</span>
              </MediaMatch>
            </S.Link>
          </Link>

          <Link href="/os" passHref>
            <S.Link isActive={activeLink === '/os'} title="Ordem de Serviço">
              <S.Marker />
              <img
                src="img/icons/os-icon.svg"
                alt="Icone do menu de Ondem de Serviço"
              />
              <MediaMatch greaterThan="medium">
                <span>OS</span>
              </MediaMatch>
            </S.Link>
          </Link>

          <Link href="/clientes" passHref>
            <S.Link isActive={activeLink === '/clientes'} title="Clientes">
              <S.Marker />
              <img
                src="img/icons/clientes-icon.svg"
                alt="Icone do menu de Clientes"
              />
              <MediaMatch greaterThan="medium">
                <span>Clientes</span>
              </MediaMatch>
            </S.Link>
          </Link>

          <Link href="/cronograma" passHref>
            <S.Link isActive={activeLink === '/cronograma'} title="Cronograma">
              <S.Marker />
              <img
                src="img/icons/cronograma-icon.svg"
                alt="Icone do menu de Cronograma"
              />
              <MediaMatch greaterThan="medium">
                <span>Cronograma</span>
              </MediaMatch>
            </S.Link>
          </Link>
        </S.Nav>
      </S.Menu>

      <S.Fotter>
        <Link href="/" passHref>
          <S.LogOut title="Log out">
            <img
              src="img/icons/logout-icon.svg"
              alt="Icone do menu de Logout"
            />
            <MediaMatch greaterThan="medium">
              <span>Log out</span>
            </MediaMatch>
          </S.LogOut>
        </Link>
      </S.Fotter>
    </S.Wrapper>
  )
}

export default Menu
