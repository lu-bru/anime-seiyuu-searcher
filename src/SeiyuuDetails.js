import React from 'react'
import Moment from 'react-moment';

export default function SeiyuuDetails( { name, image, birthday, favorites } ) {
    return (
        <>
            <section className="seiyuu-details">
                <img className="seiyuu-details__img" src={image} alt={name}/>
                <div className="seiyuu-details__item">
                    <h2 className="seiyuu-details__item__title">Birthday</h2>
                    <h3 className="seiyuu-details__item__value">
                        <Moment format="MM/DD/YYYY">
                            {birthday}
                        </Moment>
                    </h3>
                </div>
                <div className="seiyuu-details__item">
                    <h2 className="seiyuu-details__item__title">Favorites</h2>
                    <h3 className="seiyuu-details__item__value">{favorites}</h3>
                </div>
            </section>
        </>
    )
}
