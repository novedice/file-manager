import { stdin, stdout } from "process";
import { homedir } from "os";
import readline from "node:readline/promises";
import { showCurDir } from "./functions/showCurrentDirectory.js";
import { cdUp } from "./functions/cdUp.js";
import { ls } from "./functions/ls.js";
import { cdCd } from "./functions/cdCd.js";
import { deleteFile } from "./functions/delete.js";
import { moveFile } from "./functions/move.js";
import { renameFile } from "./functions/rn.js";
import { copyFile } from "./functions/copy.js";
import { readAndPrint } from "./functions/cat.js";
import { addFile } from "./functions/add.js";

let currentUserName = "Anonimous";

process.chdir(homedir());

const args = process.argv.slice(2);
if (args.length) {
  const nameArr = args[0].split("=");
  currentUserName = nameArr[1];
}
console.log(`Welcome to the File Manager, ${currentUserName}!`);
showCurDir();

const rl = readline.createInterface(stdin, stdout);

rl.addListener("close", () => {
  console.log(`Thank you for using File Manager, ${currentUserName}, goodbye!`);
});
rl.addListener("line", (input) => {
  const trimmedInput = input.trim();
  if (trimmedInput === ".exit") {
    rl.close();
  }
  if (trimmedInput.includes("up")) {
    cdUp();
  }
  if (trimmedInput.includes("ls")) {
    ls();
  }
  if (trimmedInput.includes("cd")) {
    cdCd(trimmedInput);
  }
  if (trimmedInput.includes("rm")) {
    deleteFile(trimmedInput);
  }
  if (trimmedInput.includes("mv")) {
    moveFile(trimmedInput);
  }
  if (trimmedInput.includes("rn")) {
    renameFile(trimmedInput);
  }
  if (trimmedInput.includes("cp")) {
    copyFile(trimmedInput);
  }
  if (trimmedInput.includes("cat")) {
    readAndPrint(trimmedInput);
  }
  if (trimmedInput.includes("add")) {
    addFile(trimmedInput);
  }
});
