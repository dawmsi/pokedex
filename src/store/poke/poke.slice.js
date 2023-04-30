import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  pokemons: {}
}

export const pokeSlice = createSlice({
  name: "pokeApi",
  initialState,
  reducers: {
    updateList(state, action) {
      state.pokemons = action.payload
    },
  },
})

export const pokeActions = pokeSlice.actions
export const pokeReducer = pokeSlice.reducer
