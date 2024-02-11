import { useState } from 'react'
import { LoginForm } from './components/login-form'
import { BackGroundDiv } from '@/features/shared/components/background-dev'
import { CardComponent } from '@/features/login/components/card-component'
import { USER_TYPE, USE_LOCAL_STORAGE } from '@/shared/shared.interface'
import { Container } from '@/components/atoms/container'
import { useLocalStorage } from '../shared/hooks/useLocalStorage'

type getRenderedLoginTypeProps = {
  loginType: USER_TYPE | null
  setType: (type: USER_TYPE) => void
}

const getRenderedLoginType = ({
  loginType,
  setType
}: getRenderedLoginTypeProps) => {
  switch (loginType) {
    case null:
      return <CardComponent setType={setType} />
    default:
      return <LoginForm disabled={true} />
  }
}

export const LoginComponent = () => {
  const [loginType, setLoginType] = useState<USER_TYPE | null>(null)
  const { setItem } = useLocalStorage(USE_LOCAL_STORAGE.LOGGED_IN_TYPE)

  const setType = (type: USER_TYPE) => {
    setItem(type)
    setLoginType(type)
  }

  return (
    <Container className="bg-white py-24 sm:py-32 h-screen">
      <BackGroundDiv>
        {getRenderedLoginType({ loginType, setType })}
      </BackGroundDiv>
    </Container>
  )
}
