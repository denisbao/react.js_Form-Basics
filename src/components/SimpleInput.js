import { useRef, useState } from 'react'

const SimpleInput = props => {
  // handling the input with state
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
  
  const nameInputChageHandler = event => {
    setEnteredName(event.target.value)
  }

  // handling the input with refs
  const nameInputRef = useRef()


  const formSubmitHandler = event => {
    event.preventDefault()

    // validation based on the state
    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)

    console.log(`Input via state: ${enteredName}`)

    const enteredValue = nameInputRef.current.value
    console.log(`Input via refs: ${enteredValue}`)

    setEnteredName('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={enteredNameIsValid ? 'form-control' : 'form-control invalid'}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChageHandler}
        />
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
