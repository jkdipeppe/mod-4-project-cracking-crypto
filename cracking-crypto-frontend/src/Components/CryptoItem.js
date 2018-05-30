import React from 'react'
import { Grid, Popup } from 'semantic-ui-react'

const CryptoItem = ({ crypto }) => {
  const hourChange = crypto.quotes.USD.percent_change_24h
  let color = 'red'
  if(hourChange>0){
    color = 'green'
  }
  return(
      <Popup
        trigger={
          <Grid.Row>
            <Grid.Column width={2}>
              {crypto.rank}
            </Grid.Column>
            <Grid.Column width={2}>
              {crypto.symbol}
            </Grid.Column>
            <Grid.Column width={3}>
              {crypto.name}
            </Grid.Column>

            <Grid.Column width={4}>
              ${
                crypto.quotes.USD.market_cap.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').slice(0,-3)
              }
            </Grid.Column>

            <Grid.Column width={3}>
              {crypto.quotes.USD.price.toFixed(4).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} USD
            </Grid.Column>

            <Grid.Column width={2} color={`${color}`} style={{margin:0}}>
              {crypto.quotes.USD.percent_change_24h}%
            </Grid.Column>
          </Grid.Row>
        }
        content={
          <div>
            1h % change: {crypto.quotes.USD.percent_change_1h}%  |  Circulating Supply: {crypto.circulating_supply}
          </div>
        }
        on='click'
        hideOnScroll
        position='top center'
        inverted
      />
  )
}

export default CryptoItem
