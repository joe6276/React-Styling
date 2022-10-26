import React, { useState } from 'react'
import { Form1Props } from '../Interfaces'
import styles from 'styled-components'
interface StyledDiv {
  valid: boolean
}
const FormControl = styles.div<StyledDiv>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    width:500px;
    border: 1px solid black;
    padding: 20px;
& input{
    padding: 5px;
    border-color:${(props) => (props.valid ? 'black' : 'red')}
}
& label{
color:${(props) => (props.valid ? 'black' : 'red')}
}

& button{
    padding:5px;
    border-style: none;
    background-color: coral;
    color: white;
    border-radius: 5px;
    font-size: 20px;
}
`
export const StyledComponent: React.FC<Form1Props> = ({ onsave }) => {
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
      <FormControl valid={valid}>
        <label style={{ color: valid ? 'black' : 'red' }}>Enter a Name:</label>
        <input
          style={{
            borderColor: !valid ? 'red' : 'black',
            backgroundColor: valid ? 'transparent' : 'salmon',
          }}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <button onClick={submitForm}> Submit </button>
      </FormControl>
    </div>
  )
}
