export const validHints = ['correct', 'wrongPlace', 'empty'] as const;
export type Hint = (typeof validHints)[number];
