export default function TodoListItem({
  todo,
  onCompletedClicked,
  onDeleteClicked,
  className,
}) {
  return (
    <div className={`flex justify-between items-center gap-3 ${className}`}>
      {/* Texto da tarefa */}
      <h3 className="flex-1 break-words max-w-[70%]">{todo.text}</h3>

      {/* Botão à direita */}
      <div className="flex gap-2 shrink-0">
        {todo.isCompleted ? (
          <button
            onClick={() => onDeleteClicked(todo.text)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 whitespace-nowrap"
          >
            Delete Item
          </button>
        ) : (
          <button
            onClick={() => onCompletedClicked(todo.text)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 whitespace-nowrap"
          >
            Mark as Completed
          </button>
        )}
      </div>
    </div>
  )
}
