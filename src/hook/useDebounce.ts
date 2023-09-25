import { useState, useEffect } from 'react';

export default function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedVale] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedVale(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}
