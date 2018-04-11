import React, { Component } from 'react'
import styles from '../styles/SearchBar.module.scss'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    return (
      <div>
        <form className={styles.searchBar} onSubmit={this.handleSubmit}>
          <input
            value={this.state.term}
            placeholder="Search..."
            onChange={event => this.setState({ term: event.target.value })}
          />
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSearchTermSubmit(this.state.term)
  }
}

export default SearchBar
