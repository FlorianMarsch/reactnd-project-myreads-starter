import React from 'react'

import {Link} from 'react-router-dom'

class AddButton extends React.Component {

render(){
  return(<div className="open-search">
  <Link to="/add">Add a book</Link>
</div>)
}



}
export default AddButton