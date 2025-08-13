import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {getDecryptedAccessToken} from "../../utils/tokenUtils.js";
import * as header from "zod";

//custom fectBaseQuery
fetchBaseQuery({
  baseUrl: import.meta.env.BASE_URL,
  prepareHeaders:()=>{
    const accessToken = getDecryptedAccessToken();
    if(accessToken){
      header.set('authorization', accessToken);
    }
    return header;
  }
});
// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: () => ({})
});
