import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
  {/* <hr/> */}
  {/* <br/> */}
        <form onSubmit={this.handleOnSubmit}>
        <strong>Review Input</strong>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit"/>
        </form>

      </div>
    );
  }
};

export default ReviewInput;
