import React, { useState, useEffect } from 'react'
import AnimeMainInfo from './AnimeMainInfo'
import AnimeDetails from './AnimeDetails'
import AnimeCharacter from './AnimeCharacter'
import CharactersSubtitle from './CharactersSubtitle'
import Credits from './Credits'
import Loading from './Loading'

export default function ContainerAnime( { match } ) {

    const [loading, setLoading] = useState(true)
    const [animeDetails, setAnimeDetails] = useState({})
    const [animeCharacters, setAnimeCharacters] = useState([])

    useEffect(() => {
        const getAnimeDetails = async () => {
            const proxyurl = "https://cors-anywhere.herokuapp.com/"
            let apiURL = `${proxyurl}https://api.jikan.moe/v3/anime/${match.params.id}`
            setLoading(true)
            const response = await fetch(apiURL, {
                method: 'GET',
                headers: {'Content-Type': 'text/plain',},
            })
            const data = await response.json();
            setAnimeDetails(data);
            console.log(data);
            setLoading(false)
        };
        getAnimeDetails();
        console.log(match);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const getAnimeCharacters = async () => {
            const proxyurl = "https://cors-anywhere.herokuapp.com/"
            let apiURL = `${proxyurl}https://api.jikan.moe/v3/anime/${match.params.id}/characters_staff`
            setLoading(true)
            const response = await fetch(apiURL, {
                method: 'GET',
                headers: {'Content-Type': 'text/plain',},
            })
            const data = await response.json();
            setAnimeCharacters(data.characters);
            console.log(data.characters);
            setLoading(false)
        };
        getAnimeCharacters();
        console.log(match);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    if (loading) return <Loading />
    return (
        <>
            <div className="master-container">
                <AnimeMainInfo
                    key={animeDetails.mal_id}
                    title={animeDetails.title}
                    synopsis={animeDetails.synopsis}
                    image={animeDetails.image_url}
                />
                <article className="anime-details-ch-container">
                    <AnimeDetails
                        key={animeDetails.mal_id}
                        id={animeDetails.mal_id}
                        type={animeDetails.type}
                        episodes={animeDetails.episodes}
                        season={animeDetails.premiered}
                        source={animeDetails.source}
                    />
                    <section className="anime-ch-sub-container">
                        <CharactersSubtitle />
                        <div className="anime-character-container">
                            {animeCharacters && animeCharacters.map(characters => (
                                <AnimeCharacter 
                                    key={characters.mal_id}
                                    name={characters.name}
                                    image={characters.image_url}
                                    role={characters.role}
                                    seiyuu={characters.voice_actors}
                                />
                            ))}
                        </div>
                    </section>
                </article>
                <Credits />
            </div>
        </>
    )
}
