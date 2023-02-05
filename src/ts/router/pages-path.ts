enum MainPath {
  main = "/",
}

export interface PagesPath {
  main: typeof MainPath;
}

export const pagesPath: PagesPath = {
  main: MainPath,
};
