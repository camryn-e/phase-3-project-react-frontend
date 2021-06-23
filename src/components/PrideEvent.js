import React, {useState, useEffect} from 'react'


const PrideEvent = (props) => {
    // // state = {
    // //     cities: []
    // // }

    const [prideEvent, setPrideEvent] = useState({
        title: '',
        category: '',
        description: '',
        age_rating: '',
        city_id: 0
    })

    useEffect(() => {
        fetch(`http://localhost:9292/cities/${props.match.params.city_id}/pride-events/${props.match.params.id}`)
          .then(response => response.json())
          .then(eventData => setPrideEvent(eventData))
    }, [props.match.params.id])
    //     fetch(`http://localhost:9292/cities/${props.id}`)
    //       .then(response => response.json())
    //       .then(eventData => setEvents(eventData))
    // })

    // // componentDidMount() {
    // //     fetch('http://localhost:9292/cities')
    // //       .then(response => response.json())
    // //       .then(citiesData => this.setState({ cities: citiesData }))
    // // }

    // handleDelteEvent = (e) => {
    //     e.preventDefault()
    //     console.log(this.state)
    //     this.props.handleAddEvent(this.state)
    // }

    // handleCancelEvent = (e) => {
    //     e.preventDefault()
    //     console.log(prideEvent)
    //     props.cancelEvent(prideEvent.id)
    // }

    return (
        <div>
            <div>
            <h2>{prideEvent.title}</h2>
            <p>Category: {prideEvent.category}</p>
            <p>Description: {prideEvent.description}</p>
            <p>Age Rating: {prideEvent.age_rating}</p>
            </div>
            <br/>

        </div>
    )
}

export default PrideEvent