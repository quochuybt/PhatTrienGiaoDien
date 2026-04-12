import React from "react";
import { useRecoilState } from "recoil";
import { UserAtom } from "../../recoil/UserAtom";
import { useNavigate } from "react-router-dom";

const LogoutComponent = () => {
  const [user, setUser] = useRecoilState(UserAtom);
  const navigate = useNavigate();
  function handleLogout() {
    setUser({ userName: "", login: false });
    navigate("/");
  }
  if (!user.login) {
    return (
      <div>
        <h2>Bạn chưa đăng nhập</h2>
        <button onClick={() => navigate("/")}>Quay lại</button>
      </div>
    );
  }
  return (
    <div>
      <h1>{user.userName}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutComponent;
