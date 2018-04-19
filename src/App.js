import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[],
    title : 'MyReads',
    query :'',
    found :[]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      console.log(books);
      this.setState({books:books});
    });
  }

  search(term){
    this.setState({query:term});
    if(!term || term.trim() === ''){
      this.setState({found:[]});
    }else{
      BooksAPI.search(term).then((found)=>{
        console.log(found);
        this.setState({found:found});
      });
    }

  }

  render() {

    return (
      <BrowserRouter>
        <div className="app">
          <Route
            path='/add'
            render={()=>(<SearchBooks query={this.state.query} found={this.state.found} onChange={(term)=>(this.search(term))}/>)}
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
