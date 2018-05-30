import React from 'react'
import AddCrypto from './AddCrypto'
import ShowPosition from './ShowPosition'
import CustomIndexItem from './CustomIndexItem'
import { Grid } from 'semantic-ui-react'


class ShowPortfolioItem extends React.Component {
  constructor(props){
    super(props)
    this.state={
      positions: [...this.props.portfolio.cryptos]
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      positions: [...nextProps.portfolio.cryptos]
    })
  }

  handleAddedPosition = (newPosition) => {
    this.setState({
      positions: [...this.state.positions, newPosition]
    })
  }

  render(){
    if(this.state.positions) {
      let aum = 0
      this.state.positions.forEach(position => {
        aum += (position.quantity * position.buy_price)
      })
      let positions = []
      this.state.positions.forEach(position => {
        if(!positions.includes(position.name)){
          positions.push(position.name)
        }
      })

      return(
        <div>
          <h1>
            {this.props.portfolio.name}
          </h1>
          <div>
          </div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6} />
              <Grid.Column width={4} >
                <h3>AUM: ${aum.toFixed(2)}</h3>
                <h3>Total Positions: {positions.length}</h3>
              </Grid.Column>
              <Grid.Column width={6} />
            </Grid.Row>
            {
              this.state.positions.map(position => {
                return (<ShowPosition key={position.id} position={position} />)
              })
            }

          <Grid.Row>
            <Grid.Column width={16}>
              <div>
                {
                  <AddCrypto cryptos={this.props.cryptos} portfolio={this.props.portfolio} handleAddedPosition={(newPosition) => this.handleAddedPosition(newPosition)}/>
                }
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      )
    } else {
      return(
        <div>
          <h3>Please select a portfolio or create one!</h3>
        </div>
      )
    }
  }
}

export default ShowPortfolioItem
