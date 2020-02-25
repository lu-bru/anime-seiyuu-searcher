import React from 'react'

export default function Search( {getSearch, search, updateSearch} ) {
    return (
        <>
            <form className="search-form" onSubmit={getSearch} >
				<input className="search-form__input" type="text" value={search} placeholder="E.g. Shingeki no Kyojin" onChange={updateSearch}/>
				<button className="search-form__submit" type="submit">Search Anime</button>
			</form>
        </>
    )
}
