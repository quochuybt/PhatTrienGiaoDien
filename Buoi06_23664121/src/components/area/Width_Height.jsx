import React from "react";
import { useRecoilState } from "recoil";
import { height, width } from "../../recoil/AreaAtom";

const Width_Height = () => {
  const [w, setW] = useRecoilState(width);
  const [h, setH] = useRecoilState(height);

  const handleWidth = (e) => {
    const value = e.target.value;
    setW(value);
  };
  const handleHeight = (e) => {
    const value = e.target.value;
    setH(value);
  };

  return (
    <div>
      <input
        type="number"
        value={w}
        placeholder="Nhập width: "
        onChange={(e) => handleWidth(e)}
      />
      <input
        type="number"
        value={h}
        placeholder="Nhập height: "
        onChange={(e) => handleHeight(e)}
      />
    </div>
  );
};

export default Width_Height;
