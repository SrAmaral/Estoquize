import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckBoxProps = {
  isChecked?: boolean
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'title' | 'grey'
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const CheckBox = ({
  isChecked = false,
  onCheck,
  label,
  labelFor = '',
  labelColor = 'title',
  value,
  ...props
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }
  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default CheckBox
