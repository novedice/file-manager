import { showCurDir } from "./showCurrentDirectory.js";
import fsPromises from "fs/promises";
import { pathResolver } from "./pathResolver.js";

export const addFile = async (input) => {
  console.log("add ", input.split(" ").slice(1));
  try {
    const fileName = input
      .split(" ")
      .slice(1)
      .filter((thePath) => thePath !== " ");

    await fsPromises.appendFile(pathResolver(fileName[0]), "", { flag: "ax" });
    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
