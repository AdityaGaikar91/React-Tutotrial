import React from 'react'

function Search({restArr, setAllRestArr}) {

    function handleSearch(searchedText) {
        let searchRest = restArr.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase()))
        setAllRestArr(searchRest)
    }
    
  return (
    <div>
        <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder='Search The Restaurant' className='border-2 to-black rounded'/>
    </div>
  )
}

export default Search