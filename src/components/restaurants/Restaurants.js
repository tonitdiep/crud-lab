import React, { Component } from 'react';
import Restaurant from './Restaurant';
class Restaurants extends Component {
  
  render() {
    debugger
    const { restaurants, deleteRestaurant } = this.props;
    const restaurantList = restaurants.map(restaurant => {
        return(
            <Restaurant 
              key={restaurant.id}
              restaurant={restaurant}
              deleteRestaurant={deleteRestaurant}          
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