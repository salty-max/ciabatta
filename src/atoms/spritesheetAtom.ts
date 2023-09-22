import { atom } from "recoil";

export const spritesheetAtom = atom<HTMLImageElement | null>({
  key: "spritesheetAtom",
  default: null,
});
