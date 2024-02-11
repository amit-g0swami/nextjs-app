import Image from 'next/image'
import { UserAuth } from '@/contexts/AuthContext'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

interface ILoginFormProps {
  disabled?: boolean
}

const DummyLoginForm = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <Container>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <Container className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed"
            disabled
          />
        </Container>
      </Container>

      <Container>
        <Container className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <Container className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </Container>
        </Container>
        <Container className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed"
            disabled
          />
        </Container>
      </Container>

      <Container>
        <button
          type="submit"
          className="flex w-full mt-6 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"
          disabled
        >
          Sign in
        </button>
      </Container>
    </form>
  )
}

export const LoginForm = ({ disabled = false }: ILoginFormProps) => {
  const { googleSignIn } = UserAuth()

  const handleSignIn = () => {
    try {
      googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className="flex min-h-full flex-1 flex-col justify-center px-1 py-1 lg:px-1">
      <Container className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto"
          alt="Logo"
          src="/assets/logo.png"
          width={198}
          height={198}
          priority
        />
        <Text
          as="h2"
          className="text-center mx-2 mb-6 text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign in to your account
        </Text>

        <DummyLoginForm />

        <Text as="p" className="my-6 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </a>
        </Text>

        <button
          type="submit"
          className="flex items-center gap-2 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed"
          onClick={() => handleSignIn()}
        >
          <Image
            src="/assets/search.png"
            alt=""
            width={18}
            height={18}
            priority
          />
          <Text>Sign in with Google</Text>
        </button>
      </Container>
    </Container>
  )
}
