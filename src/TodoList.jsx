import { useSelector } from "react-redux"
import TodoListItem from "./TodoListItem"
import NewTodoForm from "./NewTodoForm"

export default function TodoList() {
  const todosAreLoading = useSelector((state) => !state.loading.value.completed)
  const todos = useSelector((state) => state.todos.value)

  return (
    <div className="w-full max-w-6xl mx-auto bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-300">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Todos</h1>

      <div className="mb-8">
        <NewTodoForm />
      </div>

      {todosAreLoading ? (
        <p> Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Completed Todos */}
            <div className="bg-green-50 p-4 rounded-lg shadow-inner border border-green-500">
              <h3 className="text-green-700 font-semibold mb-4 text-lg">
                Completed
              </h3>
              <div className="space-y-3 border-t border-green-300 pt-3">
                {todos.length > 0 ? (
                  todos.map((todo) => (
                    <TodoListItem
                      todo={todo}
                      key={todo.id}
                      className="bg-green-100 rounded p-3 border border-green-200 flex justify-between items-center"
                    />
                  ))
                ) : (
                  <p className="text-green-500 text-sm">
                    No completed todos yet!
                  </p>
                )}
              </div>
            </div>

            {/* Incomplete Todos */}
            <div className="bg-red-50 p-4 rounded-lg shadow-inner border border-red-500">
              <h3 className="text-red-700 font-semibold mb-4 text-lg">
                Incomplete
              </h3>
              <div className="space-y-3 border-t border-red-300 pt-3">
                {todos.length > 0 ? (
                  todos.map((todo) => (
                    <TodoListItem
                      todo={todo}
                      key={todo.id}
                      className="bg-red-100 rounded p-3 border border-red-200 flex justify-between items-center"
                    />
                  ))
                ) : (
                  <p className="text-red-500 text-sm">No incomplete todos!</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
