import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ searchText, setSearchText }) => {
	return (
		<div className='search'>
			<MdSearch className='search-icons' size='1.3em' />
			<input
				placeholder='type to search...'
				type='text'
				value={searchText}
				onChange={(e)=> setSearchText(e.target.value)} />
    	</div>
  	);
}

export default Search
