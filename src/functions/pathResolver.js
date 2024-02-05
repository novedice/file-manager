import path from "path";

export const pathResolver = (thePath) => {
  return path.resolve(process.cwd(), thePath);
};
