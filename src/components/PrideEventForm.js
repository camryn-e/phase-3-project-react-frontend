import React, {Component} from 'react'



export default class PrideEventForm extends Component {
    
    state = {
        title: '',
        category: 'Parade',
        description: '',
        age_rating: 'All Ages'
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
        console.log(event.target.value)
        this.setState({
          age_rating: event.target.value
        })
    }

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
            <select name="category" value={this.state.category} onChange={event => this.handleCategoryChange(event)}>
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
            <label for="age_rating">Age Rating:</label><br/>
            <select name="age_rating" value={this.state.age_rating} onChange={event => this.handleAgeRatingChange(event)}>
              <option value="All Ages">All Ages</option>
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