import { showCurDir } from "./showCurrentDirectory.js";
import { resolve } from "path";

export const cdCd = async (input) => {
  const pathToDir = input.split(" ").slice(1);
  try {
    process.chdir(resolve(process.cwd(), pathToDir[0]));
    await showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
