import Button from 'components/Button'
import Heading from 'components/Heading'

import WorkersMock from './mock'

import Search from 'components/Search'
import Base from 'templates/Base'
import * as S from './styles'

export type FuncionarioProps = {
  id: number
  name: string
  func: string
  phone: string
  company: string
  image: string
  description: string
  create_at: string
  rg: string
}

const FuncionariosPage = () => (
  <S.Wrapper>
    <Base>
      <S.Content>
        <S.Header>
          <Search />
          <Button radius={20}>Adicionar Produtos</Button>
        </S.Header>

        <S.Menu>
          <S.Title>
            <Heading>Ordem de Serviços</Heading>
            <p>{`${Object.keys(WorkersMock).length} Total`}</p>
          </S.Title>
          <S.Filters>
            <S.Select name="sort_by" id="sort_by">
              <option value="default">Sem Filtro</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </S.Select>

            <S.Date type="date" name="datta" id="data" />
          </S.Filters>
        </S.Menu>

        <S.CardList>
          {WorkersMock.map((item) => (
            <S.Card key={item.id}>
              <S.Image src="img/userImage.png" alt="Foto do funcinário" />
              <Heading size="subTitle">{item.name}</Heading>
              <S.Subtitle>{item.func}</S.Subtitle>
              <S.Descripion>{item.description}</S.Descripion>
            </S.Card>
          ))}
        </S.CardList>
      </S.Content>
    </Base>
  </S.Wrapper>
)

export default FuncionariosPage
