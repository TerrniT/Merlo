import React from "react"

interface IFormField {
  labelName?: string
  placeholder: string
  inputType?: string
  value: string
  handleChange: (e: any) => any
  isTextArea?: boolean
}

const FormField = ({
  labelName,
  handleChange,
  inputType,
  value,
  placeholder,
  isTextArea,
}: IFormField) => {
  return (
    <label className='flex-1 w-full flex flex-col'>
      {labelName && (
        <span className='font-lato text-sm leading-6 text-zinc-600 mb-3'>{labelName}</span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className='py-4 sm:px-6 px-4 outline-none border-[1px] border-zinc-600 bg-transparent text-white text-sm placeholder:text-gray-700 rounded-xl sm:min-w-[300px]'
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step='0.1'
          placeholder={placeholder}
          className='py-4 sm:px-6 px-4 outline-none border-[1px] border-zinc-600 bg-transparent text-white text-sm placeholder:text-gray-700 rounded-xl sm:min-w-[300px]'
        />
      )}
    </label>
  )
}

export default FormField
