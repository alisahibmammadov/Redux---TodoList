import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);

  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(AddTodoAction(todo));
    
    }
  };
  const removeHandler = (e) => {
    dispatch(RemoveTodoAction(e));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2> Redux ile Todo List</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="Todo daxil et"
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
              cursor:'pointer'
            }}
            onKeyPress={handleSubmit}
          >
            Göndər
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo ">
                <span className="todoText">{t.todo}</span>
                <button
                  
                  onClick={() => removeHandler(t)}
                >
                  Sil
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
