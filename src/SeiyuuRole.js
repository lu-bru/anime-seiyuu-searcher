import React from 'react';
import { Link } from 'react-router-dom';

export default function SeiyuuRole( { role, character, anime } ) {
    return (
        <>  
            <div className="seiyuu-role">
                <div className="seiyuu-role__left">
                    <img className="seiyuu-role__img"src={character.image_url} alt={character.name}/> 
                </div>
                <div className="seiyuu-role__right">
                    <h4 className="seiyuu-role__name">{character.name}</h4>
                    <h5 className="seiyuu-role__role">{role}</h5>
                    <Link to={`/anime/${anime.mal_id}`}> 
                        <h5 className="seiyuu-role__anime">{anime.name}</h5>
                    </Link>
                </div>
            </div>
        </>
    )
}




