import React, {useState, useEffect} from 'react'
import CityLink from './CityLink'
import CityForm from './CityForm'

const Cities = () => {

    const [cities, setCities] = useState([])

    const [cityFormFlag, setCityFormFlag] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/cities')
          .then(response => response.json())
          .then(citiesData => setCities(citiesData))
    },[])

    const citiesList = cities.map(c => <CityLink key={c.id} city={c}/>)

    const addCity = (city) => {
        console.log(city)
        fetch(`http://localhost:9292/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(city)
        })
        .then(res => res.json())
        .then(resp => {
            console.log("hit the back")
            console.log(resp)
            setCities([...cities, resp])
        })
            .catch(function(error) {
                document.body.innerHTML = error.message;
              });
        console.log(city)
        setCityFormFlag(false)
    }

    const toggleAddCityForm = (e) => {
        setCityFormFlag(true)
    }

    return (
        <div>
            <h1>Cities</h1>
            <ul>
                {citiesList}
            </ul>
            {cityFormFlag ? <CityForm addNewCity={addCity}/> : <button onClick={toggleAddCityForm}>Add New City!</button>}
        </div>
    )
}

export default Cities
