import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { notificationAtom } from "../../recoil/notificationAtom";

export default function Notification() {
  const [noti, setNoti] = useRecoilState(notificationAtom);

  useEffect(() => {
    if (noti.visible) {
      const timer = setTimeout(() => {
        setNoti({ ...noti, visible: false });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [noti.visible]);

  if (!noti.visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        background: noti.type === "error" ? "red" : "green",
        color: "#fff",
        padding: "10px",
      }}
    >
      {noti.message}
    </div>
  );
}
