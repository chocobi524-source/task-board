import { useState, useEffect } from 'react'
import './App.css'

const STORAGE_KEY = 'task-board-tasks'

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export default function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  function addTask() {
    const text = inputValue.trim()
    if (!text) return
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1
    setTasks([...tasks, { id: newId, text, completed: false }])
    setInputValue('')
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask()
  }

  const remaining = tasks.filter(t => !t.completed).length

  return (
    <div className="app">
      <h1>タスクボード</h1>

      <div className="input-area">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="タスクを入力..."
          className="task-input"
        />
        <button onClick={addTask} className="add-button">追加</button>
      </div>

      {tasks.length > 0 && (
        <p className="summary">
          {tasks.length} 件中 {remaining} 件が未完了
        </p>
      )}

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <label className="task-label">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="task-checkbox"
              />
              <span className="task-text">{task.text}</span>
            </label>
            <button
              onClick={() => deleteTask(task.id)}
              className="delete-button"
              aria-label="削除"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="empty-message">タスクがありません。追加してください。</p>
      )}
    </div>
  )
}
