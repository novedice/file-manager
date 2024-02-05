import { showCurDir } from "./showCurrentDirectory.js";

export const moveFile = async (input) => {
  console.log("mv ", input.split(" ").slice(1));
  try {
    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
