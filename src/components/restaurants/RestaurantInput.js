import React, { Component } from 'react';

class RestaurantInput extends Component {
  // constructor(props) {
    // super(props);
  // };
  
  state = {
    
    text: ''

  };

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  }

  render() {
    // debugge
    console.log('text state', this.state)
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        Restaurant Input
        <input 
          type="text"
          value={this.state.text}
          onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit"/>
          </form>
      </div>
    );
  }
};

export default RestaurantInput;
