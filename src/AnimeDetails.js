import React from 'react'

export default function AnimeDetails( { type, episodes, season, source } ) {
    
    return (
        <>
            <section className="anime-details">
                <div className="anime-details__item">
                    <h2 className="anime-details__item__title">Format</h2>
                    <h3 className="anime-details__item__value">{type}</h3>
                </div>
                <div className="anime-details__item">
                    <h2 className="anime-details__item__title">Episodes</h2>
                    <h3 className="anime-details__item__value">{episodes}</h3>
                </div>
                <div className="anime-details__item">
                    <h2 className="anime-details__item__title">Season</h2>
                    <h3 className="anime-details__item__value">{season}</h3>
                </div>
                <div className="anime-details__item">
                    <h2 className="anime-details__item__title">Source</h2>
                    <h3 className="anime-details__item__value">{source}</h3>
                    </div>
            </section>
        </>
    )
}