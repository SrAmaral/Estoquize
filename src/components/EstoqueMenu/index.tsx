import * as S from './styles'

export type EstoqueMenuProps = {
  selected?: '/estoque' | '/saida' | '/entrada' | string
}

const EstoqueMenu = ({ selected }: EstoqueMenuProps) => (
  <S.Wrapper>
    <S.BtnProduto selected={selected}>Produtos</S.BtnProduto>
    <S.BtnSaida selected={selected}>Saida</S.BtnSaida>
    <S.BtnEntrada selected={selected}>Entrada</S.BtnEntrada>
  </S.Wrapper>
)

export default EstoqueMenu
