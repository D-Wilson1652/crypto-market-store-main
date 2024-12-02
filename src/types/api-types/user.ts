export type User = {
    token: string;
    fullName: string;
    role: string;
    email: string;
    permissions: {
        id: number;
        createPermission: boolean;
        readPermission: boolean;
        updatePermission: boolean;
        deletePermission: boolean;
    };
    onboardingStatus: boolean;
};

export type StatsType = {
    title: string;
    count: number;
    description: string;
};
