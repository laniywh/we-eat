import React, { Component } from 'react'
import Link from 'gatsby-link'
import axios from 'axios'

import SearchBar from '../components/SearchBar'
import VenueList from '../components/VenueList'

class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      venues: [],
    }
  }

  venueSearch(term) {
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
          venues: response.data.response.venues,
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermSubmit={this.venueSearch.bind(this)} />
        <VenueList venues={this.state.venues} />
      </div>
    )
  }
}

export default IndexPage
