import React, { useState, useEffect } from 'react'
import Search from './Search';
import Results from './Results';
import Loading from './Loading'


export default function ContainerIndex() {
    const [loading, setLoading] = useState(true)
    const [animeCard, setAnimeCard] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
  
    useEffect(() => {
      const getAnimeCard = async () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"
        let apiURL = `${proxyurl}https://api.jikan.moe/v3/search/anime/?q=${query}&limit=12`
        setLoading(true)
        const response = await fetch(apiURL, {
            method: 'GET',
            headers: {'Content-Type': 'text/plain',},
        })
        const data = await response.json();
        setAnimeCard(data.results);
        console.log(data.results);
        setLoading(false)
      };
      getAnimeCard();
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
      }
    
    const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    //empty the search input
    setSearch('');
    }


    if (loading) return <Loading />

    return (
        <>
            <div className="master-container">
              <Search getSearch={getSearch} search={search} updateSearch={updateSearch}/>
              <Results animeCard={animeCard}/>
            </div>
        </>
    )
}
