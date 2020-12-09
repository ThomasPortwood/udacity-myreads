import React from 'react'
import BookShelfChanger from "./BookShelfChanger"
import * as PropTypes from "prop-types";

function Book(props) {

  return (
    <div className="book">
      <div className="book-top">

        <div className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${props.book.imageLinks.thumbnail})`
        }}/>

        <BookShelfChanger book={props.book} onBookUpdate={props.onBookUpdate}/>

      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  )
}

Book.propTypes = {
  onBookUpdate: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}

export default Book