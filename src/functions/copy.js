import { showCurDir } from "./showCurrentDirectory.js";
import fs from "fs";
import { pathResolver } from "./pathResolver.js";

export const copyFile = async (input) => {
  const pathesArr = input
    .split(" ")
    .slice(1)
    .filter((path) => path !== " ");
  try {
    const sourcePath = pathResolver(pathesArr[0]);
    const destPath = pathResolver(pathesArr[1]);

    let writer = fs.createWriteStream(destPath, { flags: "w" });
    let reader = fs.createReadStream(sourcePath).pipe(writer);

    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
