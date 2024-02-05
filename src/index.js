import { stdin, stdout } from "process";
import { homedir } from "os";
import readline from "node:readline/promises";
import { EventEmitter } from "events";
import { showCurDir } from "./functions/showCurrentDirectory.js";
import { fileURLToPath } from "url";
import path from "path";
import { cdUp } from "./functions/cdUp.js";
import { ls } from "./functions/ls.js";
import { cdCd } from "./functions/cdCd.js";

let currentUserName = "Anonimous";
export const currentDir = [homedir()];

process.chdir(homedir());

const args = process.argv.slice(2);
if (args.length) {
  const nameArr = args[0].split("=");
  currentUserName = nameArr[1];
}
console.log(`Welcome to the File Manager, ${currentUserName}!`);
console.log("homedir:", homedir());
console.log("curDir", currentDir[0]);
showCurDir();
// const eventEmitter = new EventEmitter();

// eventEmitter.on("up", cdUp);
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
});
