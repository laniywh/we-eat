import React, { Component } from 'react'
import Link from 'gatsby-link'
// import yelp from 'yelp-fusion'
import axios from 'axios'

import SearchBar from '../components/SearchBar'
import RestaurantList from '../components/RestaurantList'

// const API_KEY =
//   'LgVjRoBtYK6cN3QxGV6XBysMRDpFnUi4G_uyWo0pJjDaiW4OzgQKEi5zwR_-PjXXFVbJeWQsFpM6zSUh3mRlEY22GRHJtXlGzwTk8g2cDFsMw-EkT75we_OMi4caWnYx'

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      restaurants: [],
    }
  }

  restaurantSearch(term) {
    axios
      .get('https://api.foursquare.com/v2/venues/search', {
        params: {
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          query: term,
          near: 'Rosemead, CA',
          v: '20180329',
        },
      })
      .then(response => {
        console.log(this)
        this.setState({
          restaurants: response.data.response.venues,
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermSubmit={this.restaurantSearch.bind(this)} />
        <RestaurantList restaurants={this.state.restaurants} />
      </div>
    )
  }
}

export default IndexPage
