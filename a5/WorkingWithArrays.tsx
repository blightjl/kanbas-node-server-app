import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";

  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const [todos, setTodos] = useState<any[]>([]);

  const [module, setModule] = useState({
    id: 1,
    name: "Module",
    description: "Description",
    course: "Course",
  });

  const [modules, setModuels] = useState<any[]>([]);

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };


  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  const deleteTodo = async (todo: any) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const updateTodo = async () => {
    const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };


  const removeTodo = async (todo: any) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };


  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Working with Arrays</h1>
      <h1>Modules</h1>
      <a href="http://localhost:4000/a5/module">Get Module</a>
      <br/>
      <a href="http://localhost:4000/a5/module/name">Get Module Name</a>
      <br/>
      <a href="http://localhost:4000/a5/modules">Get Modules</a>
      <br/>
      <input type="number" placeholder={"Enter module id here"}
        onChange={(e) => setModule({
          ...module, id: parseInt(e.target.value)
        })} />
        <br/>
      <input type="text" placeholder={"Enter module name here"}
        onChange={(e) => setModule({
          ...module, name: e.target.value
        })} />
        <br/>
      <a href={`http://localhost:4000/a5/modules/${module.id}/name/${module.name}`}> Update Module Name</a>
      <br/>
      <textarea placeholder={module.description}
        onChange={(e) => setModule({
          ...module, description: e.target.value
        })} />
        <br/>
      <a href={`http://localhost:4000/a5/modules/${module.id}/description/${module.description}`}> Update Module Description</a>
      <br/>
      <h1>Todos</h1>
      <input type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: parseInt(e.target.value)
        })} />
      <br />

      <textarea value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value,
        })} />
        <br/>
        <a className="btn btn-danger" href={`http://localhost:4000/a5/todos/${todo.id}/description/${todo.description}`}> Update Description </a>
        <br/>
        <input checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked
          })} />
        Completed
        <br/>
        <a className="btn btn-warning" href={`http://localhost:4000/a5/todos/${todo.id}/completed/${todo.completed}`}> Update completion </a>
        <br/>

      <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })} />
      <h3>Updating an Item in an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
        Update Title to {todo.title}
      </a>

      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input value={todo.id}
        onChange={(e) => setTodo({
          ...todo,
          id: parseInt(e.target.value)
        })} />
      <a className="btn btn-primary" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a className="btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <br />

      <input value={todo.id} readOnly />
      <br />
      <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })} />
      <br />
      <textarea value={todo.description}
        onChange={(e) => setTodo({
          ...todo,
          description: e.target.value
        })} />
      <br />
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value
        })} />
      <br />
      <label>
        <input checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked
          })} />
        Completed
      </label>
      <br />
      <div>
        <button className="btn btn-warning" onClick={postTodo} style={{ "width": "50%" }}> Post Todo </button>
        <br/>
        <button className="btn btn-primary" onClick={createTodo} style={{ "width": "50%" }}> Create Todo </button>
        <br />
        <button className="btn btn-success" onClick={updateTodo} style={{ "width": "50%" }}> Update Title </button>
        <br/>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button onClick={() => deleteTodo(todo)}
                className="btn btn-danger">
                Delete
              </button>
              <button className="btn btn-warning" onClick={() => fetchTodoById(todo.id)}> Edit </button></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default WorkingWithArrays;