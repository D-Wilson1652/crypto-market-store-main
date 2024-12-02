import { useState, useEffect } from "react";

export function useSearchParams() {
    const [searchParams, setSearchParams] = useState<URLSearchParams>(
        new URLSearchParams(window.location.search)
    );

    useEffect(() => {
        const handlePopstate = () => {
            setSearchParams(new URLSearchParams(window.location.search));
        };

        window.addEventListener("popstate", handlePopstate);

        return () => {
            window.removeEventListener("popstate", handlePopstate);
        };
    }, []);

    return searchParams;
}
