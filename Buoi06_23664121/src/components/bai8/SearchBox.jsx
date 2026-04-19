import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { searchAtom } from "../../recoil/SearchAtom";

export default function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const [state, setState] = useRecoilState(searchAtom);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!keyword.trim()) return;

      setState((prev) => ({ ...prev, loading: true }));

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${keyword}`
        );
        const data = await res.json();

        setState({
          data,
          loading: false,
          error: null
        });
      } catch (err) {
        setState({
          data: [],
          loading: false,
          error: err.message
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}

      <ul>
        {state.data.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
}