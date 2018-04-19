import React from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends React.Component {

    render() {

        const {book,onBookMove} = this.props;
        const thumbnail = book.imageLinks ?  book.imageLinks.thumbnail:'';
        return (

            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+thumbnail+'")' }}></div>
                <BookShelfChanger book={book} onBookMove={onBookMove}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )}

    }

    export default Book