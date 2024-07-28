import React from 'react'
import Input from '../Input'

function LabelInput({type,additionalLabel, placeholder, labelText, name}) {
  return (
   <div className='input-group mb-3 flex flex-col'>
        {
            labelText ?
            <div className={`flex ${additionalLabel ? 'justify-between' : ''}`}>
                <label htmlFor={type} className="form-label mb-2 text-sm text-greyish-100 font-medium text-left text-capitalize">{labelText}</label>
                {additionalLabel ? <p className="form-label mb-2 text-sm text-greyish-100 font-medium text-left">{additionalLabel}</p> : ''}
            </div>
        :
        null
        }
        <Input 
        className='border-input-br-color text-base focus:outline-none border-[1.5px] px-3 py-1 rounded text-placeholder-color bg-transparent'
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        />
    </div>
  )
}

export default LabelInput