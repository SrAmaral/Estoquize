import Link from 'next/link'
import * as S from './styles'

export type MenuProps = {
  activeLink?:
    | '/estoque'
    | '/funcionarios'
    | '/os'
    | '/clientes'
    | '/cronograma'
  imageUser?: string
}

const Menu = ({ activeLink, imageUser = 'img/userImage.png' }: MenuProps) => (
  <S.Wrapper>
    <S.Menu>
      <S.Header>
        <S.Image image={imageUser}></S.Image>
        <S.Title>Adam Smith</S.Title>
        <S.SubTitle>Administração</S.SubTitle>
      </S.Header>
      <S.Nav>
        <Link href="/estoque" passHref>
          <S.Link isActive={activeLink === '/estoque'} title="Estoque">
            <S.Marker />
            <img
              src="img/icons/estoque-icon.svg"
              alt="Icone do menu de Estoque"
            />
            <span>Estoque</span>
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
            <span>Funcionários</span>
          </S.Link>
        </Link>

        <Link href="/os" passHref>
          <S.Link isActive={activeLink === '/os'} title="Ordem de Serviço">
            <S.Marker />
            <img
              src="img/icons/os-icon.svg"
              alt="Icone do menu de Ondem de Serviço"
            />
            <span>OS</span>
          </S.Link>
        </Link>

        <Link href="/clientes" passHref>
          <S.Link isActive={activeLink === '/clientes'} title="Clientes">
            <S.Marker />
            <img
              src="img/icons/clientes-icon.svg"
              alt="Icone do menu de Clientes"
            />
            <span>Clientes</span>
          </S.Link>
        </Link>

        <Link href="/cronograma" passHref>
          <S.Link isActive={activeLink === '/cronograma'} title="Cronograma">
            <S.Marker />
            <img
              src="img/icons/cronograma-icon.svg"
              alt="Icone do menu de Cronograma"
            />
            <span>Cronograma</span>
          </S.Link>
        </Link>
      </S.Nav>
    </S.Menu>

    <S.Fotter>
      <Link href="/" passHref>
        <S.LogOut title="Log out">
          <img src="img/icons/logout-icon.svg" alt="Icone do menu de Logout" />
          <span>Log out</span>
        </S.LogOut>
      </Link>
    </S.Fotter>
  </S.Wrapper>
)

export default Menu
