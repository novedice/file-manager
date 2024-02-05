import fsPromises from "fs/promises";
import { currentDir } from "../index.js";

export const ls = async () => {
  console.log("ls:");

  const files = await fsPromises.readdir(currentDir[0]);
  console.table(files);
};
