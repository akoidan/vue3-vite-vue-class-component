export enum GrowlType {
  SUCCESS = "growl-success", INFO = "growl-info", ERROR = "growl-error",
}

export interface Growl {
  id: number;
  text: string;
  type: GrowlType;
}
