import { showCurDir } from "./showCurrentDirectory.js";
import fsPromises from "fs/promises";

export const copyFile = async (input) => {
  console.log(
    "cp ",
    input
      .split(" ")
      .slice(1)
      .filter((path) => path !== " ")
  );
  const pathesArr = input
    .split(" ")
    .slice(1)
    .filter((path) => path !== " ");
  try {
    const sourcePath = pathesArr[0];
    const newPath = pathesArr[1];

    console.log("oldpath", sourcePath);
    console.log("newpath", newPath);

    // await fsPromises.mkdir(newPath);

    // const filesToCopy = await fsPromises.readdir(sourcePath);
    // console.log("files", filesToCopy);

    // for (let file of filesToCopy) {
    await fsPromises.copyFile(sourcePath, newPath);
    // }
    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
