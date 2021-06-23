import React from 'react'
import { Link } from 'react-router-dom'

const PrideEventLink = (props) => {
    
    const handleCancelEvent = (e) => {
        e.preventDefault()
        console.log(props.prideEvent)
        props.cancelEvent(props.prideEvent.id)
    }

    return (
        <div>
            <Link to={`/cities/${props.prideEvent.city_id}/pride-events/${props.prideEvent.id}`}>
                <h2>{props.prideEvent.title}</h2>
            </Link>
            <button onClick={handleCancelEvent}>CANCEL EVENT</button>
        </div>
    )
}

export default PrideEventLink