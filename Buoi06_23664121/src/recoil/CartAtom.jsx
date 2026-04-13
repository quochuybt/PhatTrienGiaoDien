import { atom, selector } from "recoil";

export const cartAtom = atom({
  key: "cart",
  default: [],
});
export const totalPrice = selector({
  key: "total",
  get: ({ get }) => {
    const products = get(cartAtom);
    return products.reduce((res, cur) => {
      return res + cur.price * cur.quantity;
    }, 0);
  },
});
