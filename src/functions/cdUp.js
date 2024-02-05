import { showCurDir } from "./showCurrentDirectory.js";
import { resolve } from "path";

export const cdUp = async () => {
  console.log("up");
  try {
    process.chdir(resolve(process.cwd(), ".."));
    await showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
