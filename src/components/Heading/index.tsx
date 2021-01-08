import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'large' | 'medium' | 'small'
}

const Heading = ({ children, size = 'medium' }: HeadingProps) => (
  <S.Wrapper size={size}>{children}</S.Wrapper>
)

export default Heading
