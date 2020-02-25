import React from 'react'

export default function AnimeMainInfo( { title, image, synopsis } ) {
    return (
        <>
            <article className="anime-main-info" >
                <h1 className="anime-main-info__title">{title}</h1>
                <img className="anime-main-info__img" src={image} alt={title}/>
                <p className="anime-main-info__synopsis" >{synopsis}</p>
            </article>
        </>
    )
}
