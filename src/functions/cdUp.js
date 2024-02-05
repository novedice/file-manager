import { showCurDir } from "./showCurrentDirectory.js";
// import { resolve } from "path";
import { pathResolver } from "./pathResolver.js";

export const cdUp = async () => {
  console.log("up");
  try {
    process.chdir(pathResolver(".."));
    await showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
