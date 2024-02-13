type InputProps = {
  placeholder?: string
  name: string
  type?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  placeholder = '',
  name,
  type = 'text',
  value,
  onChange
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent
      disabled:cursor-not-allowed disabled:text-gray-400"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
