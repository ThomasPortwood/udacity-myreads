import React from 'react'
import Book from "./Book";
import * as PropTypes from "prop-types";

function BooksGrid(props) {

  return (
    <ol className="books-grid">
      {props.books.map(b => (
        <li key={b.id}>
          <Book book={b} onBookUpdate={props.onBookUpdate}/>
        </li>
      ))}
    </ol>
  )
}

BooksGrid.propTypes = {
  onBookUpdate: PropTypes.func.isRequired
}

export default BooksGrid