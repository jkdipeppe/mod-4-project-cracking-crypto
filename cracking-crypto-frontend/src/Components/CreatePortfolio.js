import React from 'react'
import { Form } from 'semantic-ui-react'

class CreatePortfolio extends React.Component {
  state = {
    userId: this.props.user.id,
    name: ''
  }

  handleChange= (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <Form onSubmit={() => this.props.handleCreatePortfolio(this.state.name)}>
        <Form.Input fluid
          name='name'
          label='Create A New Portfolio Here'
          placeholder='This Portfolios Name'
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

export default CreatePortfolio
