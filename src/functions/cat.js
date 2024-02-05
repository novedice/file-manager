import { showCurDir } from "./showCurrentDirectory.js";
import fs from "fs";
import { resolve } from "path";

export const readAndPrint = async (input) => {
  try {
    const reader = fs.createReadStream(resolve(input.split(" ").slice(1)[0]), {
      encoding: "utf8",
    });
    reader.on("data", (chunk) => {
      console.log(chunk);
    });
    reader.on("error", () => {
      console.log("Operation failed");
    });
    showCurDir();
  } catch {
    console.log("Operation failed");
  }
};
