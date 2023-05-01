import propTypes from "prop-types"
import SearchIcon from '../assets/search.svg'

export const SearchLine = ({
  searchInput,
  setSearchInput
}) => {

  return (
    <div className='flex px-4 items-center w-full mt-[32px] text-black text-opacity-50 border-[2px] hover:border-[#222] rounded-[6px]'>
      <div>
        <img className='cursor-pointer' src={SearchIcon} alt='icon' />
      </div>
      <div className='w-full m-4'>
        <input
          value={searchInput}
          className='w-full outline-none text-[16px]'
          type='text'
          placeholder='Filter by name...'
          onChange={(e) => {
            setSearchInput(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

SearchLine.propTypes = {
    searchInput: propTypes.string.isRequired,
    setSearchInput:propTypes.func.isRequired
  }
  
