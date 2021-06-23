import React, {useState, useEffect} from 'react'
import PrideEventLink from './PrideEventLink'
import PrideEventForm from './PrideEventForm'


const City = (props) => {

    const [city, setCity] = useState({
        pride_events: []
    })

    const [prideEventFormFlag, setPrideEventFormFlag] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/cities/${props.match.params.id}`)
          .then(response => response.json())
          .then(cityData => {
              console.log(cityData.pride_events)
              setCity(cityData)}
              )
    }, [props.match.params.id])

    const addNewEvent = (newEvent) => {
        fetch(`http://localhost:9292/cities/${city.id}/pride-events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(resp => {
          setCity({
              ...city,
              pride_events: [...city.pride_events, resp]})
        })
            .catch(function(error) {
                document.body.innerHTML = error.message;
              });
        
        console.log("new event", newEvent)
        setPrideEventFormFlag(false)
    }

    const deleteEvent = (eventID) => {
        fetch(`http://localhost:9292/cities/${city.id}/pride-events/${eventID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
        })
        .then(() => {
            const currentEvents = city.pride_events.filter(e => e.id != eventID)
            setCity({
                ...city,
                pride_events: currentEvents})
        })
            .catch(function(error) {
                document.body.innerHTML = error.message;
              });
        
        console.log(eventID)
    }

    const pride_events = city.pride_events.map(p => <PrideEventLink key={p.id} prideEvent={p} cancelEvent={deleteEvent}/>)



    return (
        <div>
            <h1>{city.name}</h1>
            <br/>
            <h3>Pride Events!</h3>
            {pride_events}
            <br/>

            {prideEventFormFlag ? <PrideEventForm handleAddEvent={addNewEvent} city={city}/> : <button onClick={() => setPrideEventFormFlag(true)}>Add Event!</button>}
        </div>
    )
}

export default City