# MyReads Project

React 'MyReads' project submission for Thomas Portwood

To start:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Component Hierarchy
```bash
App # sends API request for books on shelves (state)
  - MyReads # displays all book shelves
    - BookShelf # displays title of shelf and books on shelf
      - BooksGrid # displays ordered list of books
        - Book # displays book thumbnail, title, author
          - BookShelfChanger # displays shelf options, invokes function to change shelf of book
  - SearchBooks # sends API request for query results (state) 
    - BooksGrid # displays ordered list of books
      - Book # displays book thumbnail, title, author
        - BookShelfChanger # displays shelf options, invokes function to change shelf of book
```