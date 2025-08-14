import { useState } from "react"
import "./App.css"
import TodoList from "./TodoList"

function App() {
  const [completedTodos, setCompletedTodos] = useState([
    { text: "Take Out The Garbage", isCompleted: true },
    { text: "Make Dinner", isCompleted: true },
  ])
  const [incompleteTodos, setIncompleteTodos] = useState([
    { text: "Paint the house", isCompleted: false },
  ])

  function markAsCompleted(text) {
    setIncompleteTodos(incompleteTodos.filter((t) => t.text !== text))
    setCompletedTodos([
      ...completedTodos,
      { ...incompleteTodos.find((t) => t.text === text), isCompleted: true },
    ])
  }

  function deleteTodo(text) {
    setCompletedTodos(completedTodos.filter((t) => t.text !== text))
  }

  function createTodo(text) {
    setIncompleteTodos([...incompleteTodos, { text, isCompleted: false }])
  }

  return (
    <>
      <TodoList
        completedTodos={completedTodos}
        incompleteTodos={incompleteTodos}
        onCompletedClicked={markAsCompleted}
        onDeleteClicked={deleteTodo}
        onCreateClicked={createTodo}
      />
    </>
  )
}

export default App
