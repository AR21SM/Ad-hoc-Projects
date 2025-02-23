import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);


    fetch("http://localhost:3004/todo")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json);
      })
      .catch((err) => console.error("Error fetching todos:", err));
  

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
