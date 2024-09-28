import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React from 'react'
import Task from '../Task'
import { TTask } from '../../lib/types'

function Column({tasks}: {tasks: TTask[]}) {
  return (
    <div className='bg-[#f2f2f3] rounded-[5px] p-[15px] w-[80%] max-w-[500px] flex flex-col gap-[15px]'>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task: TTask) => {
          return <Task key={task.id} title={task.title} id={task.id} />
        })}
      </SortableContext>
    </div>
  )
}

export default React.memo(Column)