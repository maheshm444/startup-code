import { useState, useEffect } from 'react'
import { notification } from 'antd'
import axios from 'axios'
import * as emailjs from 'emailjs-com'

export const useForm = (validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [shouldSubmit, setShouldSubmit] = useState(false)

  const openNotificationWithIcon = () => {
    notification['success']({
      message: 'Success',
      description: 'Your message has been sent!',
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(validate(values))
    console.log(values)
    // Your url for API
    //console.log(values)
    // if (values) {
    //   let templateParams = {
    //     from_name: values.name,
    //     to_name: 'Mahesh and Shashank',
    //     subject: 'Student Application from Pro - Skills',
    //     message: values.message,
    //   }
    //   emailjs.send(
    //     'service_81n2ae2',
    //     'template_u02g4io',
    //     templateParams,
    //     'user_8ujG0w82IEpJw7e5JQ9Uw'
    //   )
    // }

    const url = ''
    if (Object.keys(values).length === 3) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true)
        })
    }
  }
  const handleSubmitStudentForm = (event) => {
    event.preventDefault()
    setErrors(validate(values))
    console.log('user values', values)
    // return;

    // occupation: "Software developer"
    // dedicate_hours: "test"

    // father_occupation: "In house dad"
    // knowledge_tech: "test"
    // mother_occupation: "Home maker"
    // motivation_data: "test"
    // motivation_program: "test"

    // pc_config: "test"
    // permanent_address: "Bangalore"

    // qualification: "B.E"

    // name: "test"
    // fatherName: "Ravi"
    // email: "maheshm444@gmail.com"
    // phoneNumber: "8105384226"
    // current_address: "Bangalore"

    // Your url for API
    //console.log(values)
    if (values) {
      const fatherName = values.fatherName ? values.fatherName : ''
      const email = values.email ? values.email : ''
      const phoneNumber = values.phoneNumber ? values.phoneNumber : ''
      const current_address = values.current_address
        ? values.current_address
        : ''
      const permanent_address = values.permanent_address
        ? values.permanent_address
        : ''
      const qualification = values.qualification ? values.qualification : ''
      const occupation = values.occupation ? values.occupation : ''
      const father_occupation = values.father_occupation
        ? values.father_occupation
        : ''
      const mother_occupation = values.mother_occupation
        ? values.mother_occupation
        : ''
      const knowledge_tech = values.knowledge_tech ? values.knowledge_tech : ''
      const motivation_program = values.motivation_program
        ? values.motivation_program
        : ''
      const pc_config = values.pc_config ? values.pc_config : ''
      const dedicate_hours = values.dedicate_hours ? values.dedicate_hours : ''
      const relocate_data = values.relocate_data ? values.relocate_data : ''
      const motivation_data = values.motivation_data
        ? values.motivation_data
        : ''
      let templateParams = {
        from_name: values.name ? values.name : '',
        to_name: 'Mahesh and Shashank',
        subject: 'Student Application from Pro - Skills',
        name: values.name ? values.name : '',
        fatherName: fatherName,
        email: email,
        phoneNumber: phoneNumber,
        current_address: current_address,
        permanent_address: permanent_address,
        qualification: qualification,
        occupation: occupation,
        father_occupation: father_occupation,
        mother_occupation: mother_occupation,
        knowledge_tech: knowledge_tech,
        motivation_program: motivation_program,
        pc_config: pc_config,
        dedicate_hours: dedicate_hours,
        relocate_data: relocate_data,
        motivation_data: motivation_data,
      }
      emailjs.send(
        'service_81n2ae2',
        'template_jjgdiyg',
        templateParams,
        'user_8ujG0w82IEpJw7e5JQ9Uw'
      )
    }
    window.location.replace('/')
    const url = ''
    if (Object.keys(values).length === 3) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true)
        })
    }
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues('')
      openNotificationWithIcon()
    }
  }, [errors, shouldSubmit])

  const handleChange = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
    setErrors((errors) => ({ ...errors, [event.target.name]: '' }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    handleSubmitStudentForm,
  }
}
