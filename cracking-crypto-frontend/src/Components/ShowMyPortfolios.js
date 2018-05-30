import React from 'react'
import CreatePortfolio from './CreatePortfolio'
import ShowPortfolioItem from './ShowPortfolioItem'
import { Grid, Menu, Segment, Form } from 'semantic-ui-react'


class ShowMyPortfolios extends React.Component {

  state = {
    activeItem: 'bio',
    currPortfolio: {},
    portfolios: [],
    allCryptos: this.props.cryptos
  }

  componentDidMount(){
    if(this.props.user){
      this.setState({
        portfolios: this.props.user.portfolios
      })
    }
  }

  handleItemClick = (e) => {
    fetch('http://localhost:3000/api/v1/portfolios')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(portfolio => {
        if(portfolio.name === e.name){
          this.setState({
            activeItem: e.name,
            currPortfolio: portfolio
          })
        }
      })
    })
    this.setState({
      activeItem: e.name,
      currPortfolio: e
    })
  }

  handleCreatePortfolio = (portfolioName) => {
    if(portfolioName.length > 0 && portfolioName[0] !== ' '){
      fetch('http://localhost:3000/api/v1/portfolios', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: this.props.user.id,
          name: portfolioName,
          num_positions: 0
        })
      })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          portfolios: [...this.state.portfolios, json],
          currPortfolio: json
        })
      })
    }
  }

  render(){
    const { activeItem, currPortfolio } = this.state
    const { user } = this.props
    if(user && this.state.portfolios.length > 0){
      return(
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
            {
              this.state.portfolios.map(portfolio => {
                return (
                  <Grid.Row key={portfolio.id}>
                    <Menu.Item

                      name={portfolio.name}
                      active={activeItem === '${portfolio.name}'}
                      onClick={() => this.handleItemClick(portfolio)} />
                  </Grid.Row>
                )
              })
            }
            <Menu.Item>
              <Grid.Column width={8}>
                <CreatePortfolio user={user} handleCreatePortfolio={(name) => this.handleCreatePortfolio(name)} />
              </Grid.Column>
            </Menu.Item>
          </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            {
              this.state.currPortfolio.cryptos ?
              <ShowPortfolioItem cryptos={this.props.cryptos} portfolio={this.state.currPortfolio}/>
              :
              <h1>Please Select a Portfolio</h1>
            }
          </Grid.Column>
          <Grid.Row>

          </Grid.Row>
        </Grid>
      )
    } else if(user){
      return(
        <div>
          <h1>You have no Portfolios</h1>
          <CreatePortfolio user={user} handleCreatePortfolio={(name) => this.handleCreatePortfolio(name)} />
        </div>
      )
    } else {
      return (<h1>Please Log In!</h1>)
    }
  }
}

export default ShowMyPortfolios
