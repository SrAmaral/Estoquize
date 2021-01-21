import { useRouter } from 'next/router'
import Menu from 'components/Menu'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const { asPath } = useRouter()
  return (
    <S.Wrapper>
      <S.Menu>
        <Menu activeLink={asPath} />
      </S.Menu>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Base
