import propTypes from "prop-types"
import { GridItem } from "./GridItem"
import { useSelector } from "react-redux"

export const GridList = ({ debounced, setLimit }) => {
  const { pokemons } = useSelector((state) => state.pokeSlice)

  return (
    <>
      {pokemons.isLoading ? (
        <p>loading</p>
      ) : (
        <>
          <p className="mt-2 text-lg font-bold text-center">
            Count: {pokemons?.count ?? 0}
          </p>
          <div className="mt-[28px] flex flex-wrap justify-center gap-6 mb-6">
            {pokemons?.results?.length < 1 ? (
              <p>No items</p>
            ) : (
              pokemons?.results
                ?.filter((item) =>
                  item.name.toUpperCase().includes(debounced.toUpperCase())
                )
                ?.map((item, index) => (
                  <div key={index}>{<GridItem {...item} />}</div>
                ))
            )}
          </div>
        </>
      )}
      <div className="flex justify-center pb-6">
        <button
          onClick={() => setLimit((prevLimit) => prevLimit * 2)}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Show more
        </button>
      </div>
    </>
  )
}

GridList.propTypes = {
  debounced: propTypes.string,
  setLimit: propTypes.func,
}
