import React from 'react'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import Plot from 'react-plotly.js';

class ShowCharts extends React.Component {
  state={
    allCryptos: null,
    crypto: 'Type a Crypto for its',
    abbreviation: 'BTC',
    xaxis: [],
    yaxis: []
  }

  componentDidMount(){
    this.setState({
      allCryptos: this.props.cryptos
    })
  }

  handleSearchChange = (e, {value}) => {
    this.props.cryptos.forEach(crypto => {
      if(value !== '' && crypto.name.toLowerCase() === value.toLowerCase()){
        this.setState({
          crypto: crypto.name,
          abbreviation: crypto.symbol,
          xaxis: [],
          yaxis: []
        })
        fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${crypto.symbol}&tsym=USD&allData`)
        .then(resp => resp.json())
        .then(json => {
          json.Data.forEach(data => {
            this.setState({
              xaxis: [...this.state.xaxis, data.close],
              yaxis: [...this.state.yaxis, data.high, data.low]
            })
          })

        })
      }
    })
  }


  render(){
    let xCoordinates = this.state.xaxis.sort()
    let yCoordinates = this.state.yaxis.sort()

    return(
      <div>
        <Search
          onSearchChange={_.debounce(this.handleSearchChange.bind(this), 500)}
          showNoResults={false}
          placeholder={'Search Crypto Name'}
        />
        <Plot
        data={[
          {
            x: [...Array(100).keys()],
            y: xCoordinates,
            type: 'line',
            marker: {color: 'red'},
          },
        ]}
        layout={ {width: 960, height: 720, title: `${this.state.crypto} Chart`} }
      />

      </div>
    )
  }
}

export default ShowCharts
