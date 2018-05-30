import React from 'react'
import { withRouter } from "react-router-dom";
import ShowCryptos from './ShowCryptos';


class ShowLogout extends React.Component {

  render(){
    return(
      <div>
        <h2>You are Logged Out!</h2>
        {this.props.handleLogout()}
      </div>
    )
  }
}

export default ShowLogout
