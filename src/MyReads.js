import React from 'react'
import BookShelf from "./BookShelf";
import {Link} from 'react-router-dom'

const shelfNames = [
  {
    displayName: 'Currently Reading',
    name: 'currentlyReading'
  },
  {
    displayName: 'Want to Read',
    name: 'wantToRead'
  },
  {
    displayName: 'Read',
    name: 'read'
  }
]

export default class MyReads extends React.Component {

  render() {

    const {myBooks, onBookUpdate} = this.props

    return (
      <div>

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        {shelfNames.map(shelf => (
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
}