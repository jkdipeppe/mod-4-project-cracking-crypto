import React from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'


class AddCrypto extends React.Component {
  state = {
    cryptoType: 'token',
    checked: false,
    allCryptos: this.props.cryptos,
    chosenCrypto: {},
    quantity: null,
    purchasePrice: null,
    cryptoName: '',
    abbreviation: '',
    newestCrypto: null,
    submit: false
  }

  handleChange = (e, { value }) => {
    this.setState({ cryptoType: value })
  }

  handleCheck = () => {
    const{ quantity, purchasePrice, cryptoName, abbreviation } = this.state
    if(quantity && purchasePrice && cryptoName && abbreviation) {
      this.setState({
        checked: !this.state.checked
      })
    }
  }

  handleCryptoSelection = (e, {value}) => {
    let crypto = this.state.allCryptos.find(crypto => crypto.symbol === value)
    this.setState({
      abbreviation: value,
      cryptoName: crypto.name
    })
  }

  handleIntChange = (e) => {
    const re = /^\d*\.?\d*$/;
    if(re.test(e.target.value)) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleSubmit = (e, portfolio) => {
    if(this.state.checked){
      fetch('http://localhost:3000/api/v1/cryptos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.cryptoName,
          abbreviation: this.state.abbreviation,
          crypto_type: this.state.cryptoType,
          quantity: this.state.quantity,
          buy_price: this.state.purchasePrice,
        })
      })
        .then(resp => resp.json())
        .then(json => {
          this.setState({
            newestCrypto: json
          });
          fetch('http://localhost:3000/api/v1/crypto_portfolios',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              crypto_id: json.id,
              portfolio_id: this.props.portfolio.id
            })
          })
          .then(resp => resp.json())
          .then(json => {
            this.setState({
              submit: true
            })
          })
        })
    }
  }

  componentDidUpdate(){
    if(this.state.submit){
      this.props.handleAddedPosition(this.state.newestCrypto)
      this.setState({
        newestCrypto: null,
        submit: false
      })
    }
  }

  handleCryptoPortfolio = (crypto) => {
    debugger
  }

  render(){
    const options = this.state.allCryptos.map(crypto => {
      return({key: crypto.symbol, text: `${crypto.name} - Last Close ${crypto.quotes.USD.price}`, value: crypto.symbol})
    })
    return(
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <Form.Group widths='equal'>
          <Form.Field onChange={this.handleCryptoSelection} control={Select} label='Choose Crypto to Add' fluid search selection options={options} placeholder='Crypto' />
        </Form.Group>
        <Form.Group inline>
          <Form.Field width={6} onChange={this.handleIntChange} name='quantity' control={Input} label='Quantity' placeholder='Enter an Integer- no symbols' />
          <Form.Field width={6} onChange={this.handleIntChange} name='purchasePrice' control={Input} label='Purchase Price' placeholder='Enter an Integer- no symbols' />
        </Form.Group>
        <Form.Group inline>
          <label>Coin Type:</label>
          <Form.Field control={Radio} label='token' value='token' checked={this.state.cryptoType === 'token'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='currency' value='currency' checked={this.state.cryptoType === 'currency'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Field control={Checkbox} checked={this.state.checked} label='Make sure all fields are filled out' onChange={this.handleCheck} />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default AddCrypto
