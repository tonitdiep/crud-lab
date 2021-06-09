import React, { Component } from 'react';
import Restaurant from './Restaurant';
class Restaurants extends Component {
  
  render() {
    // debugger
    //destructing part
    // const { restaurants, deleteRestaurant } = this.props;
    const restaurantList = this.props.restaurants.map(restaurant => {
        return(
            <Restaurant 
              key={restaurant.id}
              restaurant={restaurant}
              deleteRestaurant={this.props.deleteRestaurant}          
            />

        )
    });
    return(
      <ul>
        Restaurants Component
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;