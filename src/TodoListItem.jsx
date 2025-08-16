import { useDispatch } from "react-redux"
import { markTodoAsCompleted } from "../todosSlice"
import { deleteTodo } from "./thunks"

export default function TodoListItem({ todo, className }) {
  const dispatch = useDispatch()

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-3 ${className}`}
    >
      {/* Texto da tarefa */}
      <h3 className="flex-1 break-words">{todo.text}</h3>

      {/* Botão à direita */}
      <div className="flex gap-2 mt-2 md:mt-0">
        {todo.isCompleted ? (
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 whitespace-nowrap"
          >
            Delete Item
          </button>
        ) : (
          <button
            onClick={() => dispatch(markTodoAsCompleted(todo.text))}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 whitespace-nowrap"
          >
            Mark as Completed
          </button>
        )}
      </div>
    </div>
  )
}
