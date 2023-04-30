import { configureStore } from "@reduxjs/toolkit"
import { pokeApi } from "./poke/poke.api"
import { pokeReducer } from "./poke/poke.slice"

export const store = configureStore({
  reducer: {
    [pokeApi.reducerPath]: pokeApi.reducer,
    pokeSlice: pokeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokeApi.middleware),
})
