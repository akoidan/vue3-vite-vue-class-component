enum MainPath {
  home = "/",
  users = "/users",
}

enum AuthPath {
  signIn = "/sign-in",
}

export interface PagesPath {
  main: typeof MainPath;
  auth: typeof AuthPath;
}

export const pagesPath: PagesPath = Object.freeze({
  main: MainPath,
  auth: AuthPath,
});
