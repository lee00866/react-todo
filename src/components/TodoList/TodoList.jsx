import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "Working out", state: "active" },
    { id: "2", text: "Laundry", state: "active" },
  ]);

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
  );
}
