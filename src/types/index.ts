export type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result;

export type SetStateActionWithReset<T> = T | ((prevState: T) => T);

export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;
