import React from 'react'

export default function DataInput({label}) {
  return (

    <div className='datainput'>
        <strong>{label}</strong>
        <div className='dateItem'>
            <input type="date" name="" id="" />
            <input type="date" name="" id="" />
        </div>
    </div>

  )
}
