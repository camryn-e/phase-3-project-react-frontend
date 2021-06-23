// import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
// import React, {Component} from 'react'
import React, {useState, useEffect} from 'react'
import PrideEventLink from './PrideEventLink'
import PrideEvent from './PrideEvent'
import PrideEventForm from './PrideEventForm'

// export default class City extends Component {
//     state = {
//         prideEvents: []
//     }

//     componentDidMount() {
//         fetch(`http://localhost:9292/cities/${props.match.params.id}`)
//           .then(response => response.json())
//           .then(eventData => this.setState({ prideEvents: eventData }))
//       }
// }


const City = (props) => {
    // state = {
    //     cities: []
    // }

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
    //     fetch(`http://localhost:9292/cities/${props.id}`)
    //       .then(response => response.json())
    //       .then(eventData => setEvents(eventData))
    // })

    // componentDidMount() {
    //     fetch('http://localhost:9292/cities')
    //       .then(response => response.json())
    //       .then(citiesData => this.setState({ cities: citiesData }))
    // }

    // const prideEvents = city.prideEvents.map(e => <Link key={e.id} to={`/events/${e.id}`}>{e.title}</Link>)

    const addNewEvent = (newEvent) => {
        fetch(`http://localhost:9292/cities/${city.id}/pride-events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        //   "Accept": "application/json"
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
        
        console.log(newEvent)
        setPrideEventFormFlag(false)
    }

    const deleteEvent = (eventID) => {
        fetch(`http://localhost:9292/cities/${city.id}/pride-events/${eventID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        //   "Accept": "application/json"
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