import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const filters = ["all", "active", "completed"];
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
