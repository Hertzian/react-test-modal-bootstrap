import { useState } from 'react'
import ButtonModal from './components/ButtonModal'
import Modal from './components/Modal'
import TextInput from './components/TextInput'

const App = () => {
  const [item, setItem] = useState({
    firstName: '',
    lastName: '',
    password: ''
  })

  const { firstName, lastName, password } = item

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <ButtonModal />
          <Modal title='Testing modal'>
            <form onSubmit={handleSubmit}>
              <TextInput
                inputId='firstName'
                value={firstName}
                label='First Name'
                name='firstName'
                pass={false}
                onChange={handleChange}
              />
              <TextInput
                inputId='lastName'
                value={lastName}
                label='Last Name'
                name='lastName'
                pass={false}
                onChange={handleChange}
              />
              <TextInput
                inputId='password'
                value={password}
                label='Password'
                name='password'
                pass={true}
                onChange={handleChange}
              />
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default App
