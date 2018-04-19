import React from 'react'

class BookShelfChanger extends React.Component {

    render() {

        const {book, onBookMove} = this.props;
        return (
            <div className="book-shelf-changer">
                <select
                defaultValue={book.shelf ? book.shelf  : 'none'}
                onChange={(e)=>{
                    onBookMove(book, e.target.value);
                }}
                
                >
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div> 
        )}

    }

    export default BookShelfChanger