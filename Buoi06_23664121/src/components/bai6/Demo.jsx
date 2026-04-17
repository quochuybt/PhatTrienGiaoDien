import React from "react";
import { useSetRecoilState } from "recoil";
import { notificationAtom } from "../../recoil/notificationAtom";

const Demo = () => {
  const setNoti = useSetRecoilState(notificationAtom);

  return (
    <button
      onClick={() =>
        setNoti({
          message: "Lỗi rồi!",
          type: "error",
          visible: true,
        })
      }
    >
      Show
    </button>
  );
};

export default Demo;
