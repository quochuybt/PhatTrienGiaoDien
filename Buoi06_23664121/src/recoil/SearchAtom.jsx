import { atom } from "recoil";

export const searchAtom = atom({
  key: "searchState",
  default: {
    data: [],
    loading: false,
    error: null,
  },
});
