import React from 'react'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

class ShowLogin extends React.Component {
  state={
    username: '',
    password: '',
    users: []
  }

  handleSubmit = () => {
    let currUser = {}
    fetch('http://localhost:3000/api/v1/users')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          users: json
        })
        currUser = json.find(user => {
          return user.password === this.state.password && user.username === this.state.username
        })
        if(currUser) {
          this.props.changeUser(currUser)
        } else{

        }
      })
      
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <Grid>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input name='username' onChange={this.handleChange} placeholder='username' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input name='password' onChange={this.handleChange} type="password" placeholder='password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid>
    )
  }
}

export default ShowLogin
