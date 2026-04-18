import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { userStateAtom } from "../../recoil/UserStateAtom";

export default function Bai7() {
  const [state, setState] = useRecoilState(userStateAtom);

  useEffect(() => {
    const fetchData = async () => {
      setState((prev) => ({ ...prev, loading: true }));

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        setState({
          data,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({
          data: [],
          loading: false,
          error: err.message,
        });
      }
    };

    fetchData();
  }, []);

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p style={{ color: "red" }}>{state.error}</p>;

  return (
    <ul>
      {state.data.map((u) => (
        <li key={u.id}>
          {u.name} - {u.email}
        </li>
      ))}
    </ul>
  );
}
