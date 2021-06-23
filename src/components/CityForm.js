import React, {Component} from 'react'



export default class CityForm extends Component {
    
    state = {
        name: ''
    }

    handleNameChange = event => {
        this.setState({
          name: event.target.value
        })
    }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     fetch('http://localhost:9292/events/', {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify(this.state)
    //     })
    //     .then(res => res.json())
    //     .then(resp => {
    //       this.props.addNewEvent(resp)
    //     })
    //         .catch(function(error) {
    //             document.body.innerHTML = error.message;
    //           });
        
    // }

    // handleAddCity = (e) => {
    //   e.preventDefault()
    //   console.log(this.state)
    //   this.props.addCity(this.state)
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.addNewCity(this.state)
    }

    render() {
        return (
          <form onSubmit={city => this.handleSubmit(city)}>
            <label for="name"> City:</label><br/>
            <input
              name="name"
              type="text"
              onChange={this.handleNameChange}
              value={this.state.name}
            />
            <br/>
            <div>
            <button type="submit">Submit</button>
            </div>
          </form>
        )
      }


}