import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api', //unique name for the API slice
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.example.com', //base URL for the API
    }),
    endpoints: () => ({

    }),
});