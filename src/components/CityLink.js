import React from 'react'
import { Link } from 'react-router-dom'

const CityLink = ({city}) => {
    return (
        <div>
            <Link to={`/cities/${city.id}`}>
                <h3>{city.name}</h3>
            </Link>
        </div>
    )
}

export default CityLink