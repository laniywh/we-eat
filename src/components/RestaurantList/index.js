import React, { Compoennt } from 'react'

const RestaurantList = props => {
  const restaurantItems = props.restaurants.map(restaurant => {
    return <li key={restaurant.id}>{restaurant.name}</li>
  })

  return <ul>{restaurantItems}</ul>
}

export default RestaurantList
