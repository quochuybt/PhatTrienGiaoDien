import { atom } from "recoil";

export const UserAtom = atom({
    key:"user",
    default:{
        userName:"123",
        login:false
    }
})