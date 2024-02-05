import { showCurDir } from "./showCurrentDirectory.js";

export const readAndPrint = async (input) => {
  console.log("cat ", input.split(" ").slice(1));
  try {
    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
