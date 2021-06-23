import React, {Component} from 'react'



export default class PrideEventForm extends Component {
    
    state = {
        title: '',
        category: '',
        description: '',
        age_rating: '',
        // date: '',
    }

    handleTitleChange = event => {
        this.setState({
          title: event.target.value
        })
    }

    handleCategoryChange = event => {
      this.setState({
        category: event.target.value
      })
    }

      
    handleDescriptionChange = event => {
        this.setState({
          description: event.target.value
        })
    }

    handleAgeRatingChange = event => {
        this.setState({
          age_rating: event.target.value
        })
    }

    // handleCityChange = event => {
    //   this.setState({
    //     city: event.target.value
    //   })
    // }

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

    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
      this.props.handleAddEvent(this.state)
    }

    render() {
        return (
          <form onSubmit={event => this.handleSubmit(event)}>
            <label for="title"> Title:</label><br/>
            <input
              name="title"
              type="text"
              onChange={event => this.handleTitleChange(event)}
              value={this.state.title}
            />
            <br/>
            <label for="category">Category:</label><br/>
            <select value={this.state.category} onChange={this.handleCategoryChange}>
              <option value="parade">Parade</option>
              <option value="party">Party</option>
              <option value="performance">Performance</option>
              <option value="conference">Conference</option>
            </select>
            <br/>
            <label for="description">Description:</label><br/>
            <input
              name="description"
              type="text"
              onChange={event => this.handleDescriptionChange(event)}
              value={this.state.description}
            />
            <br/>
            <label for="age rating">Age Rating:</label><br/>
            <select value={this.state.age_rating} onChange={this.handleAgeRatingChange}>
              <option value="all ages">All Ages</option>
              <option value="18+">18+</option>
              <option value="21+">21+</option>
            </select>
            <div>
            <br/>
            <button type="submit">Add Event</button>
            </div>
          </form>
        )
      }


}