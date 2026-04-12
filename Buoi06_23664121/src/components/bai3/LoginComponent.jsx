import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { UserAtom } from "../../recoil/UserAtom";

const LoginComponent = () => {
  const [user, setUser] = useRecoilState(UserAtom);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function handleLogin() {
    if (name.trim() === "") return alert("vui lòng nhập tên!");
    setUser({ userName: name, login: true });
    navigate("/logout");
    console.log(user);
  }
  return (
    <div>
      <h1>Đăng nhập</h1>
      <input
        type="text"
        placeholder="Nhập userName ..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
