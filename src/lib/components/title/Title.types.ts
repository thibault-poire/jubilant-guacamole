export const levels = [1, 2, 3, 4, 5, 6] as const;

export type Level = (typeof levels)[number];
