import { api } from "../api";

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
}

interface SignupRequest {
    name: string;
    email: string;
    password: string;
}

interface SignupResponse {
    message: string;
}

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body,
            })
        }),
        signup: builder.mutation<SignupResponse, SignupRequest>({
            query: (body) => ({
                url: '/signup', 
                method: 'POST',
                body
            })
        }),
    }),
});

export const { useLoginMutation, useSignupMutation } = authApi;