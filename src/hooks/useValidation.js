import { useState } from "react"
import { checkValidation } from "../utils/checkValidation"


const UseValidation = ({formData, validationRules}) => {
    const [ submit, setSubmit] = useState(false)
    const [ error, setError] = useState({})

    useEffect(() => {
        const allValues = Object.values(error).filter(val => val !== '')
        // const allTouched = Object.keys(formData).length ===  Object.values(error).length
        console.log('allValues', allValues)
    
          if(allValues.length == 0) {
            setSubmit(true)
          } else {
            setSubmit(false)
          } 
      },[error])
    
    const onSubmit = async (event) => {
      event.preventDefault()
    
      for (let inputName in formData) {
        if(inputName in validationRules ) {
          handleValidation(inputName, formData[inputName], validationRules[inputName])
        }
      }
    }

      
    const handleValidation = (inputName, value, validationRules) => {
    
      console.log(validationRules)
       const errorObj = checkValidation(inputName, value, validationRules)
    
       setError((prevState) => {
        return {...prevState,...errorObj}
      })
    
    }
}

export default UseValidation