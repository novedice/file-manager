import { showCurDir } from "./showCurrentDirectory.js";
import { resolve } from "path";
import { pathResolver } from "./pathResolver.js";

export const cdCd = async (input) => {
  const pathToDir = input.split(" ").slice(1);
  try {
    process.chdir(pathResolver(pathToDir[0]));
    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
