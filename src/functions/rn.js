import { showCurDir } from "./showCurrentDirectory.js";
import { resolve } from "path";
import path from "path";
import fsPromises from "fs/promises";

export const renameFile = async (input) => {
  const args = input
    .split(" ")
    .slice(1)
    .filter((v) => v !== " ");
  try {
    const thePath = resolve(args[0]);
    const theDir = path.dirname(thePath);
    await fsPromises.rename(thePath, path.join(theDir, args[1]));
    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
