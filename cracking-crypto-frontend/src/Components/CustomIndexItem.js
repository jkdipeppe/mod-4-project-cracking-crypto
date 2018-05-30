import React from 'react'
import { Grid } from 'semantic-ui-react'


class CustomIndexItem extends React.Component{
  state={
    symbol: 'BTC',
    price: 0
  }

  componentDidMount(){
    this.setState({
      symbol: this.props.crypto.abbreviation.toUpperCase()
    }, () => {
      let url=`https://min-api.cryptocompare.com/data/price?fsym=${this.state.symbol}&tsyms=USD,JPY,EUR`
      fetch(url)
        .then(resp => resp.json())
        .then(json => this.setState({
          price: json.USD
        }))
    })
  }


  render(){
    return(
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={4}>
            {this.props.crypto.name}
          </Grid.Column>
          <Grid.Column width={4}>
            {(this.state.price)}
          </Grid.Column>
          <Grid.Column width={4}>
            {(this.props.crypto.quantity)}
          </Grid.Column>
          <Grid.Column width={4}>
            {this.props.crypto.buy_price}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default CustomIndexItem
