import { helperWithPath } from "./helperWithPathes.js";

export const showCurDir = async () => {
  // const thePath = await helperWithPath("functions");
  // console.log(`You are currently in path_to_working_directory: ${thePath}`);
  console.log(`You are currently in ${process.cwd()}`);
};
