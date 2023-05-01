import propTypes from "prop-types"
import { useGetPokemonDetailsQuery } from "../../store/poke/poke.api"
import { FilterButton } from "../Filter/FilterButton"
import { useState } from "react"

export const GridItem = ({ name, url }) => {
  const [showDetails, setShowDetails] = useState(false)

  const pokId = Number(
    url.replace("https://pokeapi.co/api/v2/pokemon/", "").slice(0, -1)
  )

  const { data, isFetching, isLoading } = useGetPokemonDetailsQuery(pokId, {
    skip: typeof pokId !== "number",
  })

  const [toggleView, setToggleView] = useState(false)

  const toggler = {
    0: "front",
    1: "back",
  }

  const image = data?.sprites?.[`${toggler[Number(toggleView)]}_default`]
  const species = data?.types

  console.log(data)

  return (
    <>
      <div className="hover:border-black transition-all bg-white border-2 item__shadow relative flex flex-col justify-between h-[308px] w-[312px] md:w-[240px] md:h-[244px] mt-[8px] rounded-[4px] overflow-hidden item-shadow">
        {isFetching ? (
          <div role="status" className="grid place-content-center h-full">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <div className="min-h-[calc(100%-83px)] h-[calc(100%-83px)] p-3">
              {isLoading ? (
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : !image ? (
                <div className="bg-white w-full h-full grid place-content-center">
                  <p>No image</p>
                </div>
              ) : (
                <figure
                  className="hover:bg-[#222] h-full cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation()
                    setToggleView((prevS) => !prevS)
                  }}
                >
                  <img
                    className="w-full h-full object-contain object-center"
                    src={image}
                    alt="img"
                  />
                </figure>
              )}
            </div>

            <div className="absolute h-fit bg-white w-full bottom-0 px-4 py-[10px]">
              <div className="flex justify-between items-center w-full">
                <h2 className=" truncate hover:whitespace-normal font-medium text-[20px] leading-[30px]">
                  {name}
                </h2>
                <button
                  className="justify-self-end text-sm underline text-blue-400 hover:text-blue-700 cursor-pointer"
                  onClick={() => setShowDetails((prev) => !prev)}
                >
                  {!showDetails ? "show" : "hide"} details
                </button>
              </div>
              {showDetails && (
                <div>
                  <p>id: {data?.id}</p>
                  <p>is_battle_only : {data?.is_battle_only ? "yes" : "no"}</p>
                  <p>is_mega : {data?.is_mega ? "yes" : "no"}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 py-2 font-normal text-[14px] text-black text-opacity-60 leading-[21px]">
                {species &&
                  species.map(({ type, slot }) => (
                    <FilterButton key={slot} {...type} />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

GridItem.propTypes = {
  name: propTypes.string.isRequired,
  url: propTypes.string,
}
