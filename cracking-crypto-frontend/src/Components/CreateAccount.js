import React from 'react'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

class CreateAccount extends React.Component {
  constructor(){
    super()

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirmPassword: '',
      checkbox: false
    }
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    console.log(this.state)
    if(this.state.password === this.state.confirmPassword && this.state.checkbox) {
      fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: this.state.firstname,
          last_name: this.state.lastname,
          username: this.state.username,
          password: this.state.password
        })
      })
    }
  }

  render(){
    return(
      <Grid>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>First Name</label>
              <input name='firstname' onChange={this.handleFormChange} placeholder='First Name'  />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input name='lastname' onChange={this.handleFormChange} placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <label>Username</label>
              <input name='username' onChange={this.handleFormChange} placeholder='Username' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" name='password' onChange={this.handleFormChange} placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input type="password" name='confirmPassword' onChange={this.handleFormChange} placeholder='Confirm Password' />
            </Form.Field>
            <Form.Field>
              <Checkbox name='checkbox' onClick={((e) => {this.setState({checkbox: !this.state.checkbox})}).bind(this)} label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid>
    )
  }
}

export default CreateAccount
