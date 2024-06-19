import { useState, ChangeEvent, FormEvent } from 'react';
import './App.css'
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

type Todo = {
  id: string;
  task: string;
};

function App() {

  const initialTodos = [
    { id: uuidv4(), task: "task 1" },
    { id: uuidv4(), task: "task 2" },
  ]

  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const [inputTodo, setInputTodo] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTodo: Todo = {
      id: uuidv4(),
      task: inputTodo
    }
    setTodos([...todos, newTodo])
    console.log("Content Todo: ", inputTodo);
    setInputTodo("")

  }

  function handleInputTodo(event: ChangeEvent<HTMLInputElement>) {
    setInputTodo(event.target.value);
  }

  function handleDelete(id: string) {
    const updateTodo = todos.filter(todo => todo.id !== id)
    setTodos(updateTodo)
  }

  function handleEdit(id: string, newTask: string) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='container'>
      <div className='container-wrapper'>
        <main>
          <header className='todo-title'>
            <div className='todo-title-wrapper'>
              <h1>Todo List</h1>
              <p>A simple todo React List App</p>
            </div>
          </header>
          <section className='todo-task'>
            {todos.map((todo) => (
              <Todo key={todo.id} id={todo.id} task={todo.task} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
          </section>
          <section className='new-todo'>
            <form onSubmit={handleSubmit}>
              <div className='new-todo-wrapper'>
                <div className='new-todo-title'>
                  New todo
                </div>
                <div className='new-todo-menu'>
                  <input className='new-todo-input' placeholder='New Todo' value={inputTodo} onChange={handleInputTodo} />
                  <button className='new-todo-btn'>
                    ADD TODO
                  </button>
                </div>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
