import React, { useState } from 'react'
import { Todoform } from './Todoform' 
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)
  const [editValue, setEditValue] = useState("")

  const addTodo = todo => {
    setTodos([...todos, {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false
    }])
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  
  const startEdit = (id, currentTask) => {
    setEditId(id)
    setEditValue(currentTask)
  }


  const saveEdit = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, task: editValue } : todo
    ))
    setEditId(null)
    setEditValue("")
  }

  return (
    <div className="TodoWrapper">
      <h1> Get Things Done!</h1>
      <Todoform addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo 
          key={todo.id} 
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          startEdit={startEdit}
          saveEdit={saveEdit}
          editId={editId}
          editValue={editValue}
          setEditValue={setEditValue}
        />
      ))}
    </div>
  )
}