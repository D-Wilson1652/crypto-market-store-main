import { User } from "@/types/api-types/user";

export interface UserReducerInitialState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
}
