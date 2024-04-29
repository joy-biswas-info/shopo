import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://common-server-lac.vercel.app" }),
  tagTypes: ["comments"],
  endpoints: () => ({}),
});
