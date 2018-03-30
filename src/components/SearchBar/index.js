import React, { Component } from 'react'

class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
    this.props.onSearchTermSubmit(this.state.term)
  }
}

export default Searchbar
