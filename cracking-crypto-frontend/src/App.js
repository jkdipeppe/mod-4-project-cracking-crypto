import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ShowCryptos from './Components/ShowCryptos';
import ShowIndexes from './Components/ShowIndexes';
import ShowCharts from './Components/ShowCharts';
import ShowLogin from './Components/ShowLogin';
import ShowLogout from './Components/ShowLogout';
import ShowMyPortfolios from './Components/ShowMyPortfolios';
import CreateAccount from './Components/CreateAccount';
import './App.css';

class App extends Component {
  state = {
    user: null,
    search: '',
    allCryptos: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/data')
      .then(resp => resp.json())
      .then(json => {
        let arr = []
        for(var coin in json.data) {
          arr.push(json.data[coin]);
        }
        this.setState({
          allCryptos: arr
        })
      })
  }

  changeUser = (user) => {
    this.setState({
      user: user
    })
  }

  handleLogout = () => {
    this.setState({
      user: null
    })
  }

  handleSearch = (value) => {
    this.setState({
      search: value
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Cracking Crypto</h1>
          <NavBar user={this.state.user} changeUser={this.state.changeUser} handleSearch={(value) => this.handleSearch(value)} />
            <Route exact path='/' render={(props) => <ShowCryptos cryptos={this.state.allCryptos} search={this.state.search} {...props} />} />
            <Route path='/indexes' component={ShowIndexes} />
            <Route path='/charts' render={(props) => <ShowCharts cryptos={this.state.allCryptos} />} />
            {
              this.state.user !== null ?
              <div>
                <Route path='/myportfolios' render={(props) => <ShowMyPortfolios cryptos={this.state.allCryptos} user={this.state.user}{...props} />} />
                <Route path='/logout' render={(props) => <ShowLogout cryptos={this.state.allCryptos} search={this.state.search} handleLogout={this.handleLogout}{...props} />} />
              </div>
              :
              <Route path='/login' render={(props) => <ShowLogin changeUser={this.changeUser}{...props} />} />
            }
            <Route path='/createaccount' component={CreateAccount} />
        </div>
      </Router>
    );
  }
}

export default App;
