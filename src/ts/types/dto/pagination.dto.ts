export interface PaginationDTO<T> {
  users: T[];
  total: number;
  skip: number;
  limit: number;
}
