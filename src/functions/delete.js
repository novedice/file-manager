import { showCurDir } from "./showCurrentDirectory.js";

export const deleteFile = async (input) => {
  console.log("rm ", input.split(" ").slice(1));
  try {
    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
