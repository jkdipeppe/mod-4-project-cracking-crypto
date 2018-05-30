import React from 'react'
import { Grid, Card, Icon } from 'semantic-ui-react'


class ShowPostition extends React.Component {
  state={
    symbol: '',
    price: 0
  }
  componentDidMount(){
    this.setState({
      symbol: this.props.position.abbreviation.toUpperCase()
    }, () => {
      let url=`https://min-api.cryptocompare.com/data/price?fsym=${this.props.position.abbreviation.toUpperCase()}&tsyms=USD,JPY,EUR`
      fetch(url)
        .then(resp => resp.json())
        .then(json => this.setState({
          price: json.USD
        }))
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      symbol: nextProps.position.abbreviation.toUpperCase()
    }, () => {
      let url=`https://min-api.cryptocompare.com/data/price?fsym=${nextProps.position.abbreviation.toUpperCase()}&tsyms=USD,JPY,EUR`
      fetch(url)
        .then(resp => resp.json())
        .then(json => this.setState({
          price: json.USD
        }))
    })
  }

  render(){
    const invested = this.props.position.quantity * this.props.position.buy_price
    const currValue = (this.props.position.quantity * this.state.price).toFixed(2)
    const totalReturn = (((currValue-invested)/invested) * 100).toFixed(2)
    let color = 'green'
    if(totalReturn < 0){
      color = 'red'
    }

    return(

      <div>
        <Grid.Row>
          <Card
            header={`${this.props.position.name}: $${this.state.price}`}
            meta={this.props.position.abbreviation}
            description={
              <div>
                <p>Quantity: {this.props.position.quantity}</p>
                <p>Total Amount Invested: ${invested.toFixed(2)}</p>
                <p>Current Position Value: ${currValue}</p>
                <p style={{color: color}}>Total Return: {totalReturn}%</p>
              </div>
            }
          />
        </Grid.Row>

      </div>
    )
  }
}

export default ShowPostition


// , crypto_type: "coin", quantity: 1, …}
// abbreviation
// :
// "btc"
// buy_price
// :
// 5000
// created_at
// :
// "2018-05-29T20:44:38.010Z"
// crypto_type
// :
// "coin"
// id
// :
// 1
// name
// :
// "Bitcoin"
// quantity
// :
// 1
