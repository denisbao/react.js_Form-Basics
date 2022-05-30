import { useState } from "react"


const useForm = (customValidation) => {
   const [value, setValue] = useState('')
   const [wasSelected, setWasSelected] = useState(false)

   const valueIsValid = customValidation(value)
   const hasError = !valueIsValid && wasSelected

   function valueChangeHandler(event) {
      setValue(event.target.value)
   }
   function inputDeselectedHandler() {
      setWasSelected(true)
   }
   function reset() {
      setValue('')
      setWasSelected(false)
   }

   return {
      value,
      valueIsValid,
      hasError,
      valueChangeHandler,
      inputDeselectedHandler,
      reset
   }
}

export default useForm