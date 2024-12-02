export type SuccessAPIResponse<T> = {
    data: T;
    message: string;
    statusCode: number;
    errors: null;
};

export type ErrorAPIResponse = {
    data: null;
    message: string;
    statusCode: number;
    errors: null;
};
