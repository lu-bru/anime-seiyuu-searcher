import React from 'react';
import { Link } from 'react-router-dom';


export default function AnimeCard ({id, title, image}) {
    return(      
        <>
            <article className="anime-card">
                <Link to={`/anime/${id}`}> 
                    <img className="anime-card__img"src={image} alt={title}/>
                    <h2 className="anime-card__title">{title}</h2>
                </Link>
            </article>
        </>
        
    )
}
