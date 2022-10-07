import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  // READ LIST OF TODOS
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false },
  ]);
//  CREATE TODOS
  const addTodo = text => {
    const newTodos =[...todos, {text}];
    setTodos(newTodos);
  };
// UPDATE TODOS

const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted= true;
  setTodos(newTodos);
}


  return (
    <div className="App">
    <div className="todo-list">
      {todos.map((todo,index)=>(
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          />
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
    </div>
  );
}

export default App;
