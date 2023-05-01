import PropTypes from "prop-types"
import { useActions } from "../../hooks"
import { useGetListByFullUrlQuery } from "../../store/poke/poke.api"

export const FilterButton = ({ name, url }) => {
  const colorVariants = {
    normal: `bg-normal-color hover:opacity-100`,
    poison: `bg-poison-color hover:opacity-100`,
    fighting: `bg-fighting-color hover:opacity-100`,
    flying: `bg-flying-color hover:opacity-100`,
    ground: `bg-ground-color hover:opacity-100`,
    rock: `bg-rock-color hover:opacity-100`,
    bug: `bg-bug-color hover:opacity-100`,
    ghost: `bg-ghost-color hover:opacity-100`,
    steel: `bg-steel-color hover:opacity-100`,
    fire: `bg-fire-color hover:opacity-100`,
    water: `bg-water-color hover:opacity-100`,
    grass: `bg-grass-color hover:opacity-100`,
    electric: `bg-electric-color hover:opacity-100`,
    psychic: `bg-psychic-color hover:opacity-100`,
    ice: `bg-ice-color hover:opacity-100`,
    dragon: `bg-dragon-color hover:opacity-100`,
    dark: `bg-dark-color hover:opacity-100`,
    fairy: `bg-fairy-color hover:opacity-100`,
    unknown: `bg-unknown-color hover:opacity-100`,
    shadow: `bg-shadow-color hover:opacity-100`,
  }

  const { updateList } = useActions()

  const { data, isLoading, isError } = useGetListByFullUrlQuery(url)

  return (
    <button
      key={name}
      className={`${colorVariants[name]} hover:border-[#222] border-2 border-transparent opacity-75 text-white font-bold py-2 px-4 rounded`}
      type="button"
      onClick={() =>
        updateList({
          isError,
          isLoading,
          count: data?.pokemon?.length,
          results: 
            data?.pokemon?.map((item) => item.pokemon)
          ,
        })
      }
    >
      {name}
    </button>
  )
}

FilterButton.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
}
