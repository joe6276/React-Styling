
import React, { useState } from 'react'
import { Form1Props } from '../Interfaces'
import './form.css'
export const FormsStyledbyClass: React.FC<Form1Props> = ({ onsave }) => {
  const [name, setName] = useState('')
  const [valid, setValid] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setValid(true)
  }

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (name.trim().length === 0) {
      setValid(false)
      return
    }
    onsave(name)
      setValid(true)
  }

  return (
    <div>
      <div className={`form-data ${!valid? 'invalid':''}`}>
        <label>Enter a Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <button onClick={submitForm}> Submit </button>
      </div>
    </div>
  )
}
