import React from 'react'
import CryptoItem from './CryptoItem'
import { Grid, Loader } from 'semantic-ui-react'


class ShowCryptos extends React.Component {
  state = {
    cryptos: [],
    column: 'rank',
    sortOrder: true,
    cryptoDetail: null
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
            cryptos: arr
          })
        })

  }

  handleSort = (e) => {

    this.setState({
      column: e.target.id,
      sortOrder: !this.state.sortOrder
    })
  }

  render(){
    let arr = [...this.state.cryptos]
    if(this.props.search.length > 0){
      arr = arr.filter(coin => { return coin.name.toLowerCase().includes(this.props.search.toLowerCase())})
    }
    this.state.sortOrder ?
    arr.sort((a, b) => {return a[this.state.column] - b[this.state.column]}) :
    arr.sort((a, b) => {return b[this.state.column] - a[this.state.column]})

    return(
      <Grid celled="internally">
      <Grid.Row>
        <Grid.Column id="rank" onClick={this.handleSort} width={2}>
          Rank
        </Grid.Column>
        <Grid.Column id="symbol" onClick={this.handleSort} width={2}>
          Symbol
        </Grid.Column>
        <Grid.Column onClick={this.handleSort} width={3}>
          Name
        </Grid.Column>
        <Grid.Column onClick={this.handleSort} width={4}>
        Market Cap (USD)
        </Grid.Column>
        <Grid.Column onClick={this.handleSort} width={3}>
          Last Close Price
        </Grid.Column>
        <Grid.Column onClick={this.handleSort} width={2}>
          24h %Ch.
        </Grid.Column>
      </Grid.Row>
        {
          arr.map(crypto => {
            return(<CryptoItem key={crypto.id} crypto={crypto}/>)
          })
        }
      </Grid>
    )
  }
}

export default ShowCryptos
