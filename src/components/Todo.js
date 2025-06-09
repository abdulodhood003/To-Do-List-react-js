import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

export const Todo = ({
  todo,
  toggleComplete,
  deleteTodo,
  startEdit,
  saveEdit,
  editId,
  editValue,
  setEditValue
}) => {
  const isEditing = editId === todo.id

  return (
    <div className='Todo'>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            className="todo-input"
          />
          <button className="todo-btn" onClick={() => saveEdit(todo.id)}>
            Save
          </button>
        </>
      ) : (
        <>
          <p
            onClick={toggleComplete ? () => toggleComplete(todo.id) : undefined}
            className={todo.completed ? 'completed' : ''}
          >
            {todo.task}
          </p>
          <div>
            <FaEdit
              className='edit-icon'
              onClick={() => startEdit(todo.id, todo.task)}
              style={{ cursor: 'pointer' }}
            />
            <FaTrash
              className='delete-icon'
              onClick={() => deleteTodo(todo.id)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </>
      )}
    </div>
  )
}