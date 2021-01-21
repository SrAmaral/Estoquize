import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'default' | 'full'
  radius?: number
  hasHover?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, size = 'default', radius, hasHover = false, ...props },
  ref
) => (
  <S.Wrapper
    size={size}
    ref={ref}
    {...props}
    radius={radius}
    hasHover={hasHover}
  >
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
