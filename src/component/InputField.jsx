import React from 'react'

export default function InputField({htmlFor, label ,type='text' ,name,id ,value ,disabled}) {
  return (
    <div>
        <strong htmlFor={htmlFor}>{label}</strong>
        <input type={type} name={name} id={id} value={value}  disabled={disabled}/>
    </div>
  )
}
