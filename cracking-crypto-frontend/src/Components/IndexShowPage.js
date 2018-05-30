import React from 'react'
import CustomIndexItem from './CustomIndexItem'
import { Button, Grid } from 'semantic-ui-react'


class IndexShowPage extends React.Component{
  state={
    aum: 0,

  }

  componentDidMount(){
    let currAum = 0
    this.props.index.cryptos.forEach(crypto => {
      let url=`https://min-api.cryptocompare.com/data/price?fsym=${crypto.abbreviation.toUpperCase()}&tsyms=USD,JPY,EUR`
      fetch(url)
        .then(resp => resp.json())
        .then(json => {
          currAum += (crypto.quantity*json.USD)
          this.setState({
            aum: currAum
          })
        })
    })
  }

  render(){
    let initial_Cost = 0
    {this.props.index.cryptos.forEach(crypto => {
      initial_Cost += (crypto.quantity*crypto.buy_price)
    })}


    return(
      <div>
        <Button width={16}  onClick={this.props.handleReturn}>Return to All Indices</Button><br/>
        <br/>
        <p>AUM: ${(this.state.aum).toFixed(2)}</p>
        <p>Amount Invested: ${initial_Cost}</p>
        <p>Net Gain: {(((this.state.aum - initial_Cost)/initial_Cost)*100).toFixed(2)}%</p>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <h4>Name</h4>
            </Grid.Column>
            <Grid.Column width={4}>
              <h4>Current Price</h4>
            </Grid.Column>
            <Grid.Column width={4}>
              <h4>Quantity Held By Index</h4>
            </Grid.Column>
            <Grid.Column width={4}>
              <h4>Purchase Price</h4>
            </Grid.Column>
          </Grid.Row>
          {
            this.props.index.cryptos.map(crypto => {
              return (
                  <CustomIndexItem key={crypto.id} crypto={crypto} />
              )
            })
          }
        </Grid>
      </div>
    )
  }
}

export default IndexShowPage
