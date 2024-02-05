import { currentDir } from "../index.js";

export const cdCd = (input) => {
  const pathToDir = input.split(" ").slice(1);
  console.log("cd:", pathToDir);
  try {
    process.chdir(pathToDir[0]);
    currentDir.map((val, index) => {
      if (index === 0) {
        return pathToDir[0];
      }
    });
    console.log("you are in ", currentDir[0]);
  } catch {
    console.log("operation fail");
  }
};
