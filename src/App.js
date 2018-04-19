import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[],
    title : 'MyReads'
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      console.log(books);
      this.setState({books:books});
    });
  }

  render() {

    return (
      <BrowserRouter>
        <div className="app">
          <Route
            path='/add'
            render={()=>(<SearchBooks/>)}
            />
          <Route
            exact
            path='/'
            render={()=>(<BooksList books={this.state.books} title={this.state.title} />)}
            />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
