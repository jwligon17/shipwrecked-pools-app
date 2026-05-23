export interface PaginationInput {
  limit?: number;
  cursor?: string;
}

export interface PaginatedResult<TItem> {
  items: TItem[];
  nextCursor: string | null;
}
