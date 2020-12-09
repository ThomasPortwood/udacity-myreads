import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from "react-router-dom";
import BooksGrid from "./BooksGrid";
import * as PropTypes from "prop-types";
// https://www.npmjs.com/package/throttle-debounce
import {debounce} from 'throttle-debounce';

class SearchBooks extends React.Component {

  state = {
    query: '',
    queryBooks: []
  }

  onQueryChange = debounce(500, false, query => {

    /**
     * Call the API if the query is valid
     * Filter out books with no thumbnail
     * Set the state with existing books preferred over query results
     */

    if (!query) {
      this.setState(() => ({queryBooks: []}))
      return
    }

    BooksAPI.search(query).then(results => {

      if (results.error) {

        console.log(results.error)
        this.setState(prev => ({queryBooks: []}))

      }
      else {

        const queryBooks = results
          .filter(r => 'imageLinks' in r)
          .map(r => this.props.myBooks.find(b => b.id === r.id) || r)

        this.setState(() => ({queryBooks}))
      }
    })
  })

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.onQueryChange(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={this.state.queryBooks} onBookUpdate={this.props.onBookUpdate}/>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  onBookUpdate: PropTypes.func.isRequired,
  myBooks: PropTypes.array.isRequired
}

export default SearchBooks