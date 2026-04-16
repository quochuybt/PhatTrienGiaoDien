import { useRecoilState } from "recoil";
import { todoState } from "../../recoil/TodoAtom";

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todoState);

  const remove = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const edit = (id) => {
    const newText = prompt("Edit:");
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          {t.text}
          <button onClick={() => edit(t.id)}>Edit</button>
          <button onClick={() => remove(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
