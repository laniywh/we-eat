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
          client_id: 'D32TVT41QVFYQGK1C4HO3LRJZYV55NFJDITRRYTCGTZBWP11',
          client_secret: 'CGW5VBYPW5WMFMRCCAPDEHQ3WUTUB441O0NVKUTY41NSOH0X',
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
