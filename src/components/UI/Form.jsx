import React, {useState} from 'react'
import "../../styles/form.css";

const Form = () => {

    const [enteredName,setEnteredName]= useState('')
    const [enteredEmail,setEnteredEmail]= useState('')
    const [enteredPhone,setEnteredPhone]= useState('')
    const [enteredSubject,setEnteredSubject]= useState('')
    const [enteredMessage,setEnteredMessage]= useState('') 

    const submitHandler =(e)=>{
        e.preventDefault()

        console.log('submitted')
    }

  return (
    <form className='form' onSubmit={submitHandler}>
  <div className='form_input'>
    <input type="text" placeholder='Name' value={enteredName} onChange={e=> setEnteredName(e.target.value)} />
  </div>

  <div className='form_input'>
    <input type="email" placeholder='Email' value={enteredEmail} onChange={e=> setEnteredEmail(e.target.value)} />
  </div>

  <div className='form_input'>
    <input type="phone" placeholder='Phone' value={enteredPhone} onChange={e=> setEnteredPhone(e.target.value)}/>
  </div>

  <div className='form_input'>
    <input type="subject" placeholder='Subject' value={enteredSubject} onChange={e=> setEnteredSubject(e.target.value)}/>
  </div>

  <div className='form_input'>
    <textarea placeholder='Write Message' value={enteredMessage} onChange={e=> setEnteredMessage(e.target.value)}></textarea>
  </div>
  <button className='submit_btn' type='submit'>Submit</button>
</form>
  )
}

export default Form

