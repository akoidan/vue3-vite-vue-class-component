import type {SessionHolder} from "@/ts/types";

export class Storage implements SessionHolder {
  public get sessionToken(): string | null {
    return localStorage.getItem("sessionToken");
  }

  public set sessionToken(value: string | null) {
    if (value) {
      localStorage.setItem("sessionToken", value);
    } else {
      localStorage.removeItem("sessionToken");
    }
  }
}
