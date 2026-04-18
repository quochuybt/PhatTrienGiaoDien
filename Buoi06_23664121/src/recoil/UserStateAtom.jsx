import { atom } from "recoil";

export const userStateAtom = atom({
  key: "userState",
  default: {
    data: [],
    loading: false,
    error: null,
  },
});
