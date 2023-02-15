export interface BranchDTO {
  "name": string;
  "commit": {
    "sha": string;
    "url": string;
  };
  "protected": boolean;
}
