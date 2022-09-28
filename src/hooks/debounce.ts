import { useEffect, useState } from "react";

export function useDebounce(value : string, delay : number = 500) : string {
    const [debunced, setDebounced] = useState<string>(value);

    useEffect(() => {
        const timeOutId =  setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timeOutId);
    }, [value, delay]);

    return debunced;
}