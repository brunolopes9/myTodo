import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTodo } from "../todosSlice"

export default function NewTodoForm() {
  function handleCreate() {
    if (!inputText.trim()) {
      alert("Please enter a valid todo item.")
      return
    }
    onCreateClicked(inputText)
    setInputText("")
  }

  const [inputText, setInputText] = useState("")
  const dispatch = useDispatch()
  return (
    <div className=" gap-2 mx-auto">
      <input
        required
        type="text"
        className="border border-gray-500 rounded px-3 py-1.5"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-3 py-1.5 ml-3 rounded hover:bg-blue-700 hover:border-gray-700"
        onClick={() => {
          dispatch(createTodo(inputText))
        }}
      >
        Create Todo
      </button>
    </div>
  )
}
