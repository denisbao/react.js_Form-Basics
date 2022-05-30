import React from 'react'
import useInput from '../hooks/use-input'

const SimpleInput = props => {

  // Using the custom hook to configure input name:
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '')

  // Using the custom hook to configure input email:
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.includes('@'))


  // Overall form validity:
  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  // Form submission:
  const formSubmitHandler = event => {
    event.preventDefault()
    if (!enteredNameIsValid) {
      return
    }
    console.log(`Name: ${enteredName}, Email: ${enteredEmail}`)
    resetNameInput()
    resetEmailInput()
  }

  // Helper variables for styles classes
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
