type QueryObj = {
    [key: string]: string;
};

export function makeQueryString(queryObj: QueryObj) {
    const path = [];
    for (const [key, value] of Object.entries(queryObj)) {
        path.push(`${key}=${value}`);
    }
    return path.join("&").toString();
}
