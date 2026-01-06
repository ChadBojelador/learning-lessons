import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    axios.get("http://localhost:3000/api/todos")
    .then(res=>setTodos(res.data))
    .catch(err=>console.error(err))
  }

  useEffect(()=>{
    fetchTodos();
  }, [])

  const handleClick = () =>{
    if (!title) return
    axios.post("http://localhost:3000/api/todos", {title, completed: false})
    .then(res=> {
      console.log(res.data)
      setTitle("")
      fetchTodos()
    })
    .catch(err=>console.error(err))
  }

  const handleToggle = (id, completed) => {
    axios.put(`http://localhost:3000/api/todos/${id}`, {completed: !completed})
    .then(()=> fetchTodos())
    .catch(err=>console.error(err))
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/todos/${id}`)
    .then(()=> fetchTodos())
    .catch(err=>console.error(err))
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
            <h1>Todo App</h1>
        </div>

        <div> 
            <ul>
              {todos.map((todo)=>(
                <li key={todo._id}>
                  <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.title}
                  </span>
                  <button onClick={()=>handleToggle(todo._id, todo.completed)}>
                    {todo.completed ? 'Undo' : 'Complete'}
                  </button>
                  <button onClick={()=>handleDelete(todo._id)}>Delete</button>
                </li>
              )) 
              }
            </ul>
        </div>

        <div>
          <label>Enter your todo</label>
          <textarea value={title} onChange={e=>setTitle(e.target.value)}></textarea>
          <button onClick={handleClick}>Add Todo</button>        
        </div>
      </div>
    </>
  )
}

export default App
