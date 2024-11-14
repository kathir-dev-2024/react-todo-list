import React from 'react'

const Search = ({search,setsearch}) => {
  return (
    <form action="" className='searchForm'>
        <label htmlFor="">search item</label>
        <input type="text" required value={search} onChange={e=>setsearch(e.target.value)}
        placeholder='Enter the name to Search'/>
        <button>Search</button>
    </form>
  )
}

export default Search