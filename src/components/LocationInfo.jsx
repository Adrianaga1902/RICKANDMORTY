
import React from 'react'
const LocationInfo = ({ location }) => {
    return (
        <article className='location_container'>
            <h2 className='location_name'>{location?.name}</h2>
            <ul className='location_list'>
                <li className='location_list_item'>Type:<span> {location?.type}</span></li>
                <li className='location_list_item'>Dimension:<span> {location?.dimension}</span></li>
                <li className='location_list_item'>Population:<span></span> {location?.residents.length}</li>
            </ul>
        </article>
    )

}

export default LocationInfo