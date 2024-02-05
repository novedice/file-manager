import { showCurDir } from "./showCurrentDirectory.js";
import fs from "fs";
import fsPromises from "fs/promises";
import { pathResolver } from "./pathResolver.js";
import { resolve } from "path";

export const moveFile = async (input) => {
  const pathesArr = input
    .split(" ")
    .slice(1)
    .filter((path) => path !== " ");
  const sourcePath = resolve(pathesArr[0]);
  const destPath = pathResolver(pathesArr[1]);

  try {
    let writer = fs.createWriteStream(destPath, { flags: "w" });
    writer.on("error", () => console.log("Operation failed"));
    let reader = fs.createReadStream(sourcePath);
    reader.on("error", () => console.log("Operation failed"));
    reader.pipe(writer);
    showCurDir();
  } catch {
    console.log("Operation failed");
  } finally {
    await fsPromises
      .rm(sourcePath)
      .catch(() => console.log("Operation failed"));
  }
};
