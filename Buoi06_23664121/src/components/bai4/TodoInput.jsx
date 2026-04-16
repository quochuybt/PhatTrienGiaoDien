import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../../recoil/TodoAtom";

export default function TodoInput() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [text, setText] = useState("");

  const add = () => {
    setTodos([...todos, { id: Date.now(), text }]);
    setText("");
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={add}>Add</button>
    </>
  );
}
