import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const pokeApi = createApi({
  reducerPath: "pokeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (build) => ({
    typePokemon: build.query({
      query: (limit) => ({
        url: "type/",
        params: {
          limit: limit,
        },
      }),
    }),
    getListPokemon: build.query({
      query: (limit) => ({
        url: "pokemon/",
        params: {
          limit: limit,
        },
      }),
    }),
    getListByFullUrl: build.query({
      query: (url) => ({
        url: `${url?.replace("https://pokeapi.co/api/v2/", "")}`,
      }),
    }),
    getPokemonDetails: build.query({
      query: (id) => ({
        url: `pokemon-form/${id}`,
      }),
    }),
  }),
})

export const {
  useTypePokemonQuery,
  useGetListPokemonQuery,
  useGetPokemonDetailsQuery,
  useGetListByFullUrlQuery,
  useLazyGetListPokemonQuery,
} = pokeApi
