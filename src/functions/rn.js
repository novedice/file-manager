import { showCurDir } from "./showCurrentDirectory.js";

export const renameFile = async (input) => {
  console.log("rename", input.split(" ").slice(1));
  try {
    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
