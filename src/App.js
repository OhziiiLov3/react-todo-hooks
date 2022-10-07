import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';



function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" },
  ]);
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
    </div>
    </div>
  );
}

export default App;
