import React from 'react'
import AnimeCard from './AnimeCard';

export default function Results( {animeCard} ) {
    return (
        <>
            <main className="anime-card-container">
                {animeCard && animeCard.map(anime => (
                    <AnimeCard
                    key={anime.mal_id}
                    id={anime.mal_id}
                    title={anime.title}
                    image={anime.image_url} />
                ))}
            </main>
		</>
    )
}
