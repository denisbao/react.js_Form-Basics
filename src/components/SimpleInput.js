import React from 'react'
import { useState } from 'react'

const SimpleInput = props => {

  // name input states
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  // email input states
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  // validation for the name input derived from states
  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  // validation for the email input derived from states
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@')
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  // validate the form as a hole 
  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }
  
  // Inputs handlers
  const nameInputChageHandler = event => {
    setEnteredName(event.target.value)
  }
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }
  const emailInputChageHandler = event => {
    setEnteredEmail(event.target.value)
  }
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true)
  }


  // Form submission
  const formSubmitHandler = event => {
    event.preventDefault()
    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)

    if(!enteredNameIsValid) {
      return
    }

    console.log(`Name: ${enteredName}, Email: ${enteredEmail}`)

    setEnteredName('')
    setEnteredNameTouched(false)
    setEnteredEmail('')
    setEnteredEmailTouched(false)
  }

  // helper variables for styles classes
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control'

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
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailInputChageHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && <p className='error-text'>Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
