type Pop<T extends any[]> = T extends [...infer F, infer L] ? F : never;
type Push<T extends any[], V> = [...T, V];
type Shift<T extends any[]> = T extends [infer F, ...infer L] ? L : never;
type Unshift<T extends any[], V> = [V, ...T];
