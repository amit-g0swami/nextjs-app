import { Container } from '../container'

type InputProps = {
  placeholder?: string
  name: string
  type?: string
  value?: string | number
  className?: string
  label?: string
  labelRequired?: boolean
  disabled?: boolean
  readOnly?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  placeholder = '',
  name = '',
  type = 'text',
  value = '',
  className = '',
  label = '',
  labelRequired = false,
  disabled = false,
  readOnly = false,
  onChange = () => {}
}: InputProps) => {
  return (
    <Container className={className}>
      <label
        htmlFor="street-address"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
        {labelRequired && <span className="text-red-500"> * </span>}
      </label>
      <Container className="mt-2">
        <input
          type={type}
          name={name}
          className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent
      disabled:cursor-not-allowed disabled:text-gray-400"
          value={value || 0}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          readOnly={readOnly}
        />
      </Container>
    </Container>
  )
}
