import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'

import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const Login = () => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <S.Title>SEC BRASIL</S.Title>
        <S.Subtitle>Solução em docas industriais</S.Subtitle>
      </S.BannerContent>
    </S.BannerBlock>

    <S.ContentWrapper>
      <img src="img/logo.png" alt="Logo empresa Sec Brasil" />
      <S.Content>
        <Heading>Login</Heading>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        ></TextField>

        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        ></TextField>
        <Link href="/estoque">
          <Button hasHover size="small" radius={12}>
            Login
          </Button>
        </Link>
      </S.Content>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Login
