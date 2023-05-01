/* import PropTypes from "prop-types" */

import { useEffect, useState } from "react"
import { FilterButton, GridList, SearchLine } from "../components"
import {
  useLazyGetListPokemonQuery,
  useTypePokemonQuery,
} from "../store/poke/poke.api"
import { useActions, useDebounce } from "../hooks"

export const Home = () => {
  const [searchInput, setSearchInput] = useState("")
  const [limit, setLimit] = useState(12)

  const [fetchPoke, { isLoading, isError, data }] = useLazyGetListPokemonQuery()
  const { updateList } = useActions()

  const debounced = useDebounce(searchInput, 400)

  const {
    isLoading: btnsLoading,
    isError: btnsError,
    data: btnsList,
  } = useTypePokemonQuery(999)

  useEffect(() => {
    updateList({ ...data, isLoading, isError })
  }, [data, isError, isLoading, updateList])

  useEffect(() => {
    fetchPoke(!debounced ? limit : 1300)
  }, [debounced, fetchPoke, limit])

  return (
    <>
      <SearchLine searchInput={searchInput} setSearchInput={setSearchInput} />
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an count items
      </label>
      <select
        onChange={(e) => setLimit(e.currentTarget.value)}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="12">12</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      {btnsError ? (
        <p>{JSON.stringify(btnsError)}</p>
      ) : btnsLoading ? (
        <p className="grid place-content-center w-full h-[184px] text-center p-3">
          loading buttons
        </p>
      ) : (
        <figure className="flex gap-2 flex-wrap py-6">
          {btnsList &&
            btnsList?.results.map(({ name, url }) => (
              <FilterButton key={name} name={name} url={url} />
            ))}
        </figure>
      )}
      {!isLoading && <GridList debounced={debounced} setLimit={setLimit} />}
    </>
  )
}

/* Home.propTypes = {
    children: propTypes.node,
} */
