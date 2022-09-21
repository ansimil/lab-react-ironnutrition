import React from 'react'
import { Input, Button } from 'antd';
import { useState } from 'react'

const Search = (props) => {
    const [search, setSearch] = useState('')

    const handleSearch = (event) => {
        event.preventDefault()
        console.log('hello')
        props.findFood(search.toUpperCase())
        setSearch('')
    }
    const handleSearchInput = (event) => {
        setSearch(event.target.value)
    }
    
  return (  
    <form className="searchBar" onSubmit={handleSearch}>
        <Input type="text" name="search" value={search} onChange={handleSearchInput}/>
        <Button type="primary" htmlType="submit">Search</Button>
    </form>
  )
}

export default Search