import { useState } from 'react'

const SimpleInput = props => {
  
  // handling the input with state
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  // validation constants that are set based on the combine states above
  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched


  const nameInputChageHandler = event => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true)
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    setEnteredNameTouched(true)

    if(!enteredNameIsValid) {
      return
    }

    console.log(`Input via state: ${enteredName}`)
    setEnteredName('')
    setEnteredNameTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChageHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
