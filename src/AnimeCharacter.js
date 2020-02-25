import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid'

export default function AnimeCharacter( { name, image, role, seiyuu } ) {
    
    const allJapaneseSeiyuu = seiyuu.filter(seiyuu => (seiyuu.language === "Japanese"))
    // console.log(japaneseSeiyuu) //arrays
    // console.log(seiyuu)
    // for characters with more than 1 japanese seiyuu, get only the first one
    const firstJapaneseSeiyuu = [allJapaneseSeiyuu[0]]

    // console.log(firstJapaneseSeiyuu) //obj
    // const firstJapSeiyuuArray = [firstJapaneseSeiyuu] //arrays
    // console.log(firstJapSeiyuuArray)
    // console.log(japaneseSeiyuu) // empty

    //fix for skipping undefined seiyuus of minor characters
    const finalJapaneseSeiyuu = firstJapaneseSeiyuu.map(value => value === undefined ? 'No seiyuu available' : value);
    
    console.log(finalJapaneseSeiyuu);

    return (
        <>
            <div className="anime-character">
                <div className="anime-character__left">
                    <img className="anime-character__ch-img" src={image} alt={name}/>
                    <div className="anime-character__ch-info">
                        <h4 className="anime-character__ch-info__name">{name}</h4>
                        <h4 className="anime-character__ch-info__role">{role}</h4>
                    </div>
                </div>
                {finalJapaneseSeiyuu.map(seiyuu => (
                <Link className="anime-character__right" to={`/seiyuu/${seiyuu.mal_id}`} key={uuid()}>
                        <div className="anime-character__sei-info">
                            <h4 className="anime-character__sei-info__name">{seiyuu.name}</h4>
                            <h4 className="anime-character__sei-info__lang">{seiyuu.language}</h4>
                        </div>
                        <img className="anime-character__sei-img" src={seiyuu.image_url} alt={seiyuu.name}/>
                </Link>
                ))}
            </div>
        </>
    )
}
