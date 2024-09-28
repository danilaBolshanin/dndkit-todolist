import React, { useState } from 'react'

function Input({onSubmit}: {onSubmit: (input: string) => void}) {
  const [input, setInput] = useState('')
  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!input) {
      return
    }
    onSubmit(input)
    setInput('')
  }
  return (
    <form onSubmit={handleSubmit} className='flex gap-[10px]'>
      <input placeholder='Type some todo text...' type='text' className='border border-[#ddd] p-[10px]' value={input} onChange={e => setInput(e.target.value)} />
      <button type='submit' className='border-none rounded-[10px] py-[15px] px-[10px] bg-[#2563eb] text-white'>Add task</button>
    </form>
  )
}

export default React.memo(Input)
