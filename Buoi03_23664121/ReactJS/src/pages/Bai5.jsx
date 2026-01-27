import React , {useState} from 'react'
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'
import TodoList from '../components/TodoList'



function Bai5() {
    const [todos, setTodos] = useState([
      { id: 1, text: "Học React căn bản" },
      { id: 2, text: "Làm bài tập Todo List" }
    ]);
    const addToDo = (text) => {
        const newTodo = { id: Date.now(), text };
        setTodos([...todos, newTodo]);
    }
    const deleteToDo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const style = {
    maxWidth: '400px',
    margin: '50px auto',
    textAlign: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  };
  return (
    <div style={style}>
        <h1>My To-do List </h1>
        <TodoInput onAdd={addToDo}></TodoInput>
        <TodoList todos={todos} onDelete={deleteToDo}></TodoList>
    </div>
  )
  
}

export default Bai5