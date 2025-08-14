import { useState } from "react"

export default function NewTodoForm({ onCreateClicked }) {
  const [inputText, setInputText] = useState("")
  return (
    <div className=" gap-2 mx-auto">
      <input
        type="text"
        className="border border-gray-500 rounded px-3 py-1.5"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-3 py-1.5 ml-3 rounded hover:bg-blue-700 hover:border-gray-700"
        onClick={() => {
          onCreateClicked(inputText)
          setInputText("")
        }}
      >
        Create Todo
      </button>
    </div>
  )
}
