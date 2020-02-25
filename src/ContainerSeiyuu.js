import React, { useState, useEffect } from 'react'
import SeiyuuName from './SeiyuuName'
import SeiyuuDetails from './SeiyuuDetails'
import SeiyuuRole from './SeiyuuRole'
import RolesSubtitle from './RolesSubtitle'
import Credits from './Credits'
import Loading from './Loading'
import uuid from 'react-uuid'

export default function ContainerSeiyuu( { match } ) {

    const [loading, setLoading] = useState(true)
    const [seiyuuDetails, setSeiyuuDetails] = useState({})
    const [seiyuuRoles, setSeiyuuRoles] = useState([])

    useEffect(() => {
        const getSeiyuuData = async () => {
            const proxyurl = "https://cors-anywhere.herokuapp.com/"
            let apiURL = `${proxyurl}https://api.jikan.moe/v3/person/${match.params.id}`
            setLoading(true)
            const response = await fetch(apiURL, {
                method: 'GET',
                headers: {'Content-Type': 'text/plain',},
            })
            const data = await response.json();
            setSeiyuuDetails(data);
            setSeiyuuRoles(data.voice_acting_roles);
            console.log(data);
            console.log(data.voice_acting_roles)
            setLoading(false)
        };
        getSeiyuuData();
        
        console.log(match);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    if (loading) return <Loading />
    return (
        <>
            <div className="master-container">
                <article className="seiyuu-grid">
                    <SeiyuuName
                        key={seiyuuDetails.mal_id}
                        name={seiyuuDetails.name}
                    />
                    <SeiyuuDetails
                        key={uuid()}
                        name={seiyuuDetails.name}
                        id={seiyuuDetails.mal_id}
                        image={seiyuuDetails.image_url}
                        birthday={seiyuuDetails.birthday}
                        favorites={seiyuuDetails.member_favorites}
                    />
                    <section className="seiyuu-role-sub-container">
                        <RolesSubtitle />
                        <div className="seiyuu-role-container">
                            {seiyuuRoles && seiyuuRoles.map(role => (
                                <SeiyuuRole 
                                    key={uuid()}
                                    role={role.role}
                                    character={role.character}
                                    anime={role.anime}
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
