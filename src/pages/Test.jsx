import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

export default function Test(index) {

    const [userData, setUserData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
    })

    const [currentStep, setCurrentStep] = useState(0)


    const handlePrevStep = (newData) => {
        setUserData(prev => ({...prev, ...newData}))
        setCurrentStep(prev => prev - 1)
    }

    const handleNextStep = (newData) => {
        setUserData(prev => ({...prev, ...newData}))
        setCurrentStep(prev => prev + 1)
    }

    const steps = [
    <StepOne key={0} next={handleNextStep} data={userData}/>,
     <StepTwo key={1} prev={handlePrevStep} next={handleNextStep} data={userData}/>,
      <StepThree key={2} prev={handlePrevStep} data={userData}/>
    ]
    console.log('data', userData)
  return (
    <div key={index}>
        {steps[currentStep]}
    </div>
  )
}

const StepOne = (props) => {
    const handleSubmit = (values) => {
        props.next(values)
    }
    return(
        <div className='flex flex-col items-center gap-2 bg-red-500'>
        <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        >
   
                <Form>
                    <p>First Name</p>
                    <Field name='first_name' />
                    <p>middle Name</p>
                    <Field name='middle_name' />
                    <br />
                    <button className='bg-black text-white p-2 m-2' type='submit'>Next</button>
                </Form>
   
        </Formik>
        </div>
    )
}

const StepTwo = (props) => {

    const goBack = (values) => {
        props.prev(values)
    }
    const goNext = (values) => {
        props.next(values)
    }

    return(
        <div className='flex flex-col items-center gap-2 bg-green-500'>
         <Formik initialValues={props.data}
          onSubmit={goNext}>
   
                <Form>
                    <p>Last Name</p>
                    <Field name='last_name' />
                    <button className='bg-red-400 text-white p-2 m-2' type='button' onClick={goBack}>Prev</button>
                    <button className='bg-green-400 text-white p-2 m-2' type='submit'>Next</button>
                </Form>
   
        </Formik>
        </div>
    )
}

const StepThree = (props) => {
    const goBack = (values) => {
        props.prev(values)
    }
    const handleSubmit = (values) => {
        console.log(values)
        alert('Form Submitted')
    }
    return(
        <div className='flex flex-col items-center gap-2 bg-blue-500'>
        <Formik 
        initialValues={props.data}
        onSubmit={handleSubmit}>   
                <Form>
                    <p>Email</p>
                    <Field name='email' />
                    <button className='bg-red-400 text-white p-2 m-2' type='button' onClick={goBack}>Prev</button>
                    <button className='bg-green-400 text-white p-2 m-2' type='submit'>Submit</button>
                </Form>
   
        </Formik>
        </div>
    )
}