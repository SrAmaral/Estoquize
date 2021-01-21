import CheckBox from 'components/CheckBox'
import * as S from './styles'

import DataMock from './mock'

export type CardProps = {
  id: number
  name: string
  quantity: number
  category: string
  company: string
  image: string
  description: string
  create_at: string
}

export type ListProps = {
  hasName?: boolean
  hasData?: boolean
  hasQuantity?: boolean
  quantityType?: 'produtos' | 'saida' | 'entrada'
  hasLocator?: boolean
  hasLocal?: boolean
  data: CardProps[]
} & CardProps

const List = ({
  hasName = false,
  hasData = false,
  hasQuantity = false,
  quantityType = 'produtos',
  hasLocator = false,
  hasLocal = false,
  data = DataMock
}: ListProps) => (
  <S.Wrapper>
    <S.Subtitle>
      <S.Checker>
        <CheckBox />
      </S.Checker>
      <S.Id>
        <p>ID</p>
      </S.Id>
      {hasName && (
        <S.Name>
          <p>Nome</p>
        </S.Name>
      )}
      {hasData && (
        <S.Data>
          <p>Data</p>
        </S.Data>
      )}
      {hasQuantity && (
        <S.Quantity quantityType={undefined} quantity={0}>
          {quantityType === 'saida' && (
            <img
              src="img/icons/arrowExit-Icon.svg"
              alt="Flecha vermelha apontando para baixo"
            />
          )}
          {quantityType === 'entrada' && (
            <img
              src="img/icons/arrowEntry-Icon.svg"
              alt="Flecha verde apontando para cima"
            />
          )}
          <p>Qnt.</p>
        </S.Quantity>
      )}
      {hasLocator && (
        <S.Locator>
          <p>Locador</p>
        </S.Locator>
      )}
      {hasLocal && (
        <S.Local>
          <p>Local</p>
        </S.Local>
      )}
    </S.Subtitle>

    <S.ListCards>
      {data.map((item) => (
        <S.Card key={item.id}>
          <S.Checker>
            <CheckBox />
          </S.Checker>
          <S.Id>
            <p>{item.id}</p>
          </S.Id>
          {hasName && (
            <S.Name>
              <p>{item.name}</p>
            </S.Name>
          )}
          {hasData && (
            <S.Data>
              <p>{item.create_at}</p>
            </S.Data>
          )}
          {hasQuantity && (
            <S.Quantity quantityType={quantityType} quantity={item.quantity}>
              {quantityType === 'saida' && (
                <img
                  src="img/icons/arrowExit-Icon.svg"
                  alt="Flecha vermelha apontando para baixo"
                />
              )}
              {quantityType === 'entrada' && (
                <img
                  src="img/icons/arrowEntry-Icon.svg"
                  alt="Flecha verde apontando para cima"
                />
              )}
              <p>{item.quantity}</p>
            </S.Quantity>
          )}
          {hasLocator && (
            <S.Locator>
              <p>Prologis</p>
            </S.Locator>
          )}
          {hasLocal && (
            <S.Local>
              <p>Cajamar</p>
            </S.Local>
          )}
        </S.Card>
      ))}
    </S.ListCards>
  </S.Wrapper>
)

export default List
