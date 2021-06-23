import React, {useState, useEffect} from 'react'


const PrideEvent = (props) => {

    const [prideEvent, setPrideEvent] = useState({
        title: '',
        category: '',
        description: '',
        age_rating: ''
    })

    useEffect(() => {
        fetch(`http://localhost:9292/cities/${props.match.params.city_id}/pride-events/${props.match.params.id}`)
          .then(response => response.json())
          .then(eventData => {
              console.log(eventData)
              setPrideEvent(eventData)
          })
    }, [props.match.params.id])

    return (
        <div>
            <div>
            <h2>{prideEvent.title}</h2>
            <p>Category: {prideEvent.category}</p>
            <p>Description: {prideEvent.description}</p>
            <p>Age Rating: {prideEvent.age_rating}</p>
            </div>
            <br/>
            {console.log(prideEvent)}
        </div>
    )
}

export default PrideEvent