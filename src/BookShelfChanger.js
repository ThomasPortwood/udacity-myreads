import React from 'react'
import * as PropTypes from "prop-types";
import {shelfDescriptions} from "./ShelfDescriptions"

function BookShelfChanger(props) {

  return (
    <div className="book-shelf-changer">
      <select
        onChange={(e) => props.onBookUpdate(props.book, e.target.value)}
        defaultValue={props.book.shelf || 'none'}
      >
        <option value="move" disabled>Move to...</option>
        {shelfDescriptions.map(s => (<option key={s.name} value={s.name}>{s.displayName}</option>))}
        <option value="none">None</option>
      </select>
    </div>
  )
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onBookUpdate: PropTypes.func.isRequired
}

export default BookShelfChanger