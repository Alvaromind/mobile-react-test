import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = "https://front-test-api.herokuapp.com/api";

export const mobilesApi = createApi({
  reducerPath: "mobilesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  tagTypes: ["Mobiles"],
  keepUnusedDataFor: 3600, // Keep data in cache for 1 hour
  endpoints: build => ({
    getMobiles: build.query({
      query: () => "/product",
      providesTags: (result = [], _error, _arg) => [
        "Mobiles", // Fulfills Mobiles tag with the mobiles list
        ...result.map(({ id }) => ({ type: "Mobiles", id })) // Also creates a tag for each mobile device
      ]
    }),
    getMobileById: build.query({
      query: id => `/product/${id}`,
      providesTags: (_result, _error, arg) => [{ type: "Mobiles", id: arg }] // Updates only the mobile with the given ID
    }),
    addMobileToCart: build.mutation({
      query: mobile => ({
        url: "/cart",
        method: "POST",
        body: mobile
      }),
    })
  }),
});

export const { useGetMobilesQuery, useGetMobileByIdQuery, useAddMobileToCartMutation } = mobilesApi;