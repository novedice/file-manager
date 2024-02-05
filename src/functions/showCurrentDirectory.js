import { helperWithPath } from "./helperWithPathes.js";

export const showCurDir = async () => {
  console.log(`You are currently in ${process.cwd()}`);
};
