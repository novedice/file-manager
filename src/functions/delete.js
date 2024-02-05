import { pathResolver } from "./pathResolver.js";
import { showCurDir } from "./showCurrentDirectory.js";
import fsPromises from "fs/promises";

export const deleteFile = async (input) => {
  try {
    const pathToDelete = pathResolver(input.split(" ").slice(1)[0]);
    await fsPromises.rm(pathToDelete);
    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
