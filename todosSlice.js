import { createSlice } from "@reduxjs/toolkit"

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: [
      { text: "Take Out The Garbage", isCompleted: true },
      { text: "Make Dinner", isCompleted: true },
      { text: "Paint the house", isCompleted: false },
      { text: "New Todo", isCompleted: false },
    ],
  },
  reducers: {
    createTodo: (state, action) => {
      state.value = [
        ...state.value,
        { text: action.payload, isCompleted: false },
      ]
    },
    markTodoAsCompleted: (state, action) => {
      const text = action.payload
      const todo = state.value.find((t) => t.text === text)
      todo.isCompleted = true
    },
    deleteTodo: (state, action) => {
      const text = action.payload
      state.value = state.value.filter((t) => t.text !== text)
    },
  },
})

export const { createTodo, markTodoAsCompleted, deleteTodo } =
  todosSlice.actions // contains the action we are creating for the todos
