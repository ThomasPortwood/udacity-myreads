import React from 'react'
import * as PropTypes from "prop-types";

function BookShelfChanger(props) {

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => props.onBookUpdate(props.book, e.target.value)}
        defaultValue={props.book.shelf || 'none'}
      >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

BookShelfChanger.propTypes = {
  onBookUpdate: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}

export default BookShelfChanger