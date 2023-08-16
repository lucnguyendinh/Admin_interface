import { useState, useEffect } from 'react';

export default function useGetFromStore<T, F>(
    store: (callback: (state: T) => unknown) => unknown,
    storeCallback: (state: T) => F,
) {
    const [state, setState] = useState<F>();

    const result = store(storeCallback) as F;
    useEffect(() => {
        setState(result);
    }, [result]);

    return state;
}
