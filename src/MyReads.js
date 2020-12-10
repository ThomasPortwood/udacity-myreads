import React from 'react'
import * as PropTypes from "prop-types";
import BookShelf from "./BookShelf";
import {Link} from 'react-router-dom'
import {shelfDescriptions} from "./ShelfDescriptions"

function MyReads(props) {

  const {myBooks, onBookUpdate} = props

  return (
    <div>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {shelfDescriptions.map(shelf => (
        <div className="list-books" key={shelf.name}>
          <div className="list-books-content">
            <BookShelf
              books={myBooks.filter(book => book.shelf === shelf.name)}
              name={shelf.displayName}
              onBookUpdate={onBookUpdate}
            />
          </div>
        </div>
      ))}
      <div className="open-search">
        <Link to='/search' className='open-search'>
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  )
}

MyReads.propTypes = {
  myBooks: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired
}

export default MyReads