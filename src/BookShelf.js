import React from 'react'
import BooksGrid from "./BooksGrid";

export default function BookShelf(props) {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <BooksGrid
          books={props.books}
          onBookUpdate={props.onBookUpdate}
        />
      </div>
    </div>
  )
}
