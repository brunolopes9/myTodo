import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTodo } from "./thunks"

export default function NewTodoForm() {
  const [inputText, setInputText] = useState("")
  const dispatch = useDispatch()

  function handleCreate() {
    if (!inputText.trim()) {
      alert("Please enter a valid todo item.")
      return
    }
    dispatch(createTodo(inputText))
    setInputText("")
  }

  return (
    <div className="gap-2 mx-auto flex">
      <input
        required
        type="text"
        className="border border-gray-500 rounded px-3 py-1.5 flex-1"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="New todo..."
      />
      <button
        className="bg-blue-500 text-white px-3 py-1.5 ml-3 rounded hover:bg-blue-700"
        onClick={handleCreate}
      >
        Create Todo
      </button>
    </div>
  )
}
