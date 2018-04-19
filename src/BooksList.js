import React from 'react'
import BooksShelf from './BooksShelf'
import AddButton from './AddButton'

class BooksList extends React.Component {

    render() {

      const {books, title} = this.props;

      let shelfs = books.map((book)=>{return book.shelf}).filter((value, index, self)=>{return self.indexOf(value) === index});

        return (
         
            
              <div className="list-books">
                <div className="list-books-title">
                  <h1>{title}</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    
                    {

                      shelfs.map((shelf)=>{

                        let affactedBooks = books.filter((book)=>{return book.shelf === shelf});
                        return (<BooksShelf title={shelf} books={affactedBooks} key={shelf}/>);

                      })

                    }
                    
                  </div>
                </div>
                <AddButton />
              </div>
        )
      }
}

export default BooksList