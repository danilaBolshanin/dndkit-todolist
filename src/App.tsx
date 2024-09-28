import { closestCorners, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import { useState } from "react"
import Column from "./components/Column"
import { TTask } from "./lib/types"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import Input from "./components/Input"

const getTasks = () => {
  return [
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Fix styling in about section" },
    { id: 3, title: "Learn how to center a div" },
  ]
}

function App() {
  const [tasks, setTasks] = useState<TTask[]>(() => getTasks())

  const addTask = (title: string) => {
    setTasks(tasks => [...tasks, {id: tasks.length + 1, title }])
  }

  const getTaskPos = (id: number) => tasks.findIndex((task: TTask) => task.id === id)

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id === over.id) {
      return
    }

    setTasks(tasks => {
      const originalPos = getTaskPos(Number(active.id))
      const newPos = getTaskPos(Number(over.id))

      return arrayMove(tasks, originalPos, newPos)
    })
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <main className="w-full h-full flex flex-col items-center gap-[50px] mt-[10px]">
        <h1>Todos</h1>
        <DndContext 
          sensors={sensors} 
          collisionDetection={closestCorners} 
          onDragEnd={handleDragEnd}
        >
          <Input onSubmit={addTask} /> 
          <Column tasks={tasks} />
        </DndContext>
    </main>
  )
}

export default App
