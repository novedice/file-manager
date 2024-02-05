import fsPromises from "fs/promises";

export const ls = async () => {
  try {
    const files = await fsPromises.readdir(process.cwd());
    console.table(files);
  } catch {
    console.log("Operation failed");
  }
};
