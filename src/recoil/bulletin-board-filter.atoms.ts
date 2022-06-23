import { atom } from "recoil";

export const showOnlyFreeAtom = atom({
    default: false,
    key: "show-only-free",
});
