import { FaTrashAlt } from "react-icons/fa";
export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleClick = () => {
    onDelete(todo);
  };

  return (
    <li>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={status === "completed"}
      />
      {text}
      <button onClick={handleClick}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
