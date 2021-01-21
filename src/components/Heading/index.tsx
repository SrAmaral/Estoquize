import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  size?: 'large' | 'medium' | 'small' | 'subTitle'
  color?: 'black' | 'white' | 'grey'
}

const Heading = ({
  children,
  size = 'medium',
  color = 'black'
}: HeadingProps) => (
  <S.Wrapper size={size} color={color}>
    {children}
  </S.Wrapper>
)

export default Heading
