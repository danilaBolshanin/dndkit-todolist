import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities';
import React from 'react'

 function Task({title, id}: {title: string; id: number;}) {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

  return (
    <div 
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition
      }}
      className='bg-white rounded-[5px] w-full p-[20px] flex items-center gap-[20px] touch-none shadow-task' 
    >
      <input type='checkbox' className='h-[20px] w-[20px]' />
      <span>{title}</span>
    </div>
  )
}

export default React.memo(Task)