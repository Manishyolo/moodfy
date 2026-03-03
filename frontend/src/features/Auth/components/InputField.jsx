import React from 'react'

const InputField = ({label,placeholder,type,onChange,value}) => {
  return (
    <>
      <label htmlFor="email">
            {label}
            <input value={value} onChange={onChange} type={type} id="email" placeholder={placeholder} />
          </label>
    
    
    </>
  )
}

export default InputField