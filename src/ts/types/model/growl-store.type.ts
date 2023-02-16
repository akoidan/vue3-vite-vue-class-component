export enum GrowlType {
  SUCCESS = "success", INFO = "info", ERROR = "error", WARNING = "warning",
}

export interface Growl {
  id: number;
  text: string;
  type: GrowlType;
}
