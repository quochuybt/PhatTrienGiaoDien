import { atom } from "recoil";

export const notificationAtom = atom({
  key: "notification",
  default: {
    message: "",
    type: "success",
    visible: false,
  },
});
