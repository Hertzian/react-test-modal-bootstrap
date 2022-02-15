import { useState } from 'react'

const TextInput = ({ label, value, pass, name, inputId }) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        id={inputId}
        value={value}
        name={name}
        className='form-control'
        type={pass ? 'password' : 'text'}
        onChange={handleChange}
      />
    </div>
  )
}

export default TextInput
