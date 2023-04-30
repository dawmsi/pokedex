import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { pokeActions } from "../store/poke/poke.slice"

const actions = {
  ...pokeActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
