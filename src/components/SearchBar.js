import { useState } from 'react'

const SearchBar = (props) => {
    let [searchTerm, setSearchTerm] = useState('')
  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
        <input type="text" name="search here" placeholder="Search Here" text="search here"
        onChange={(e) => setSearchTerm(e.target.value)} />
        <input name="submit" type="submit"/>
    </form>
  )
}

export default SearchBar