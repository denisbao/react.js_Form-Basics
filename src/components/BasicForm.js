import useForm from '../hooks/use-form';
import React from 'react'

const BasicForm = (props) => {

  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputDeselectedHandler: nameDeselectedHandler,
    reset: nameReset
  } = useForm(value => value.trim() !== '')

  const {
    value: surname,
    valueIsValid: surnameIsValid,
    hasError: surnameHasError,
    valueChangeHandler: surnameChangeHandler,
    inputDeselectedHandler: surnameDeselectedHandler,
    reset: surnameReset
  } = useForm(value => value.trim() !== '')

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputDeselectedHandler: emailDeselectedHandler,
    reset: emailReset
  } = useForm(value => value.trim() !== '' && value.includes('@'))


  let formIsValid = false
  if (nameIsValid && surnameIsValid && emailIsValid) {
    formIsValid = true
  }

  function submitHandler(event) {
    event.preventDefault()
    if (!nameIsValid || !surnameIsValid || !emailIsValid) {
      return
    }
    console.log(`Name: ${name}, Sobrenome: ${surname}, Email: ${email}`)
    nameReset()
    surnameReset()
    emailReset()
  }

  // Helper variables for styles classes
  const nameStyles = nameHasError
    ? 'form-control invalid'
    : 'form-control'
  const surnameStyles = surnameHasError
  ? 'form-control invalid'
  : 'form-control'
  const emailStyles = emailHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameStyles}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={name} onChange={nameChangeHandler} onBlur={nameDeselectedHandler}/>
          {nameHasError && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className={surnameStyles}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={surname} onChange={surnameChangeHandler} onBlur={surnameDeselectedHandler}/>
          {surnameHasError && <p className="error-text">Name must not be empty</p>}
        </div>
      </div>
      <div className={emailStyles}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={email} onChange={emailChangeHandler} onBlur={emailDeselectedHandler}/>
        {emailHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
