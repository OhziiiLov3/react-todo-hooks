import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" },
  ]);

  const addTodo = text => {
    const newTodos =[...todos, {text}];
    setTodos(newTodos);
  };
  return (
    <div className="App">
    <div className="todo-list">
      {todos.map((todo,index)=>(
        <Todo
          key={index}
          index={index}
          todo={todo}
          />
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
    </div>
  );
}

export default App;
