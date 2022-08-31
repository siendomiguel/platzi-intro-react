import React from 'react'
import './TodosLoading.css'

function TodosLoading() {
  return (
  <div className="LoadingTodo-container">
    <span className='LoadingTodo-completeIcon'></span>
    <p className='LoadingTodo-text'>Cargando lista de tareas</p>
    <span className='LoadingTodo-deleteIcon'></span>
  </div>
  )
}

export { TodosLoading }