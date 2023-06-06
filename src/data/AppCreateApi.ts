/* eslint-disable @typescript-eslint/no-explicit-any */
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL + "",
  prepareHeaders: (headers) => {

    if (!headers.get("Authorization") && localStorage.getItem("token"))
      headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);

    headers.set("Accept", "application/json");

    return headers;
  },
});

type AppCreateQueryType = {
  name: string;
  endpoints(build: EndpointBuilder<BaseQueryFn, any, any>): any;
};

const AppCreateApi = ({ name, endpoints }: AppCreateQueryType) =>
  createApi({
    baseQuery,
    reducerPath: name,
    endpoints,
  });

export default AppCreateApi;
