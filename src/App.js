import React from 'react'
import './App.css'
import SearchBooks from "./SearchBooks";
import MyReads from "./MyReads";
import {Route} from 'react-router-dom'
import * as BooksAPI from "./BooksAPI";

export default class BooksApp extends React.Component {

  state = {
    myBooks: []
  }

  componentDidMount() {

    /**
     * Once the component is inserted in to the tree, load the books on my shelves.
     */

    BooksAPI.getAll().then(myBooks => this.setState(() => ({myBooks})))
  }

  onBookUpdate = (book, shelf) => {

    if (shelf === 'none') {

      /**
       * The shelf is being updated to 'none, so a book should be removed from my shelves.
       */

      this.setState((prev) => ({myBooks: prev.myBooks.filter(b => b.id !== book.id)}))

    } else {

      /**
       * If there is a book on my shelves with this id, update its shelf. Otherwise, add the book to my shelves.
       */

      const bookIsOnMyShelves = this.state.myBooks.some(b => b.id === book.id)

      const newMyBooks = bookIsOnMyShelves
        ? this.state.myBooks.map(b => b.id === book.id ? {...b, shelf} : b)
        : [...this.state.myBooks, {...book, shelf}]

      this.setState((prev) => ({myBooks: newMyBooks}))
    }

    BooksAPI.update(book, shelf)
  }

  render() {

    const {myBooks} = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (<MyReads myBooks={myBooks} onBookUpdate={this.onBookUpdate}/>)}/>
        <Route path='/search' render={() => (<SearchBooks myBooks={myBooks} onBookUpdate={this.onBookUpdate}/>)}/>
      </div>
    )
  }
}