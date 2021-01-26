import Button from 'components/Button'
import Heading from 'components/Heading'
import Search from 'components/Search'
import Base from 'templates/Base'
import * as S from './styles'
import EstoqueMenu from 'components/EstoqueMenu'
import List from 'components/List'

import DataMock from '../../components/List/mock'

const EstoquePage = () => {
  return (
    <S.Wrapper>
      <Base>
        <S.Content>
          <S.Header>
            <Search />
            <Button radius={20}>Adicionar Produtos</Button>
          </S.Header>

          <S.Menu>
            <S.Title>
              <Heading>Produtos</Heading>
              <p>{`${Object.keys(DataMock).length} Total`}</p>
            </S.Title>
            <EstoqueMenu selected="estoque" />
            <S.Filters>
              <S.Select name="sort_by" id="sort_by">
                <option value="default">Sem Filtro</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </S.Select>

              <S.Date type="date" name="datta" id="data" />
            </S.Filters>
          </S.Menu>

          <List hasQuantity data={DataMock} quantityType="produtos" />
        </S.Content>
      </Base>
    </S.Wrapper>
  )
}

export default EstoquePage
