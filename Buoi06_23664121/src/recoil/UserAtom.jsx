import { atom } from "recoil";

export const UserAtom = atom({
  key: "userAtom",
  default: {
    userName: "123",
    login: false,
  },
});
