import React from 'react'
import IndexItemPreview from './IndexItemPreview'
import IndexShowPage from './IndexShowPage'
import { Grid } from 'semantic-ui-react'


class ShowIndexes extends React.Component {
  state={
    indices: [],
    clickedIndex: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/indices')
      .then(resp => resp.json())
      .then(json => {
        json.map(index => {
          this.setState({
            indices: [...this.state.indices, index]
          })
        })
      })
      .then(this.setState({
        clickedIndex: null
      }))
  }

  handleClick(e){
    this.setState({
      clickedIndex: e
    })
  }

  handleReturn = () => {
    this.setState({
      clickedIndex: null
    })
  }

  render(){
    if(this.state.clickedIndex !== null){
      return <IndexShowPage handleReturn={this.handleReturn} index={this.state.clickedIndex} />
    } else {
      return(
        <Grid>
          <Grid.Column width={3} />
          {
            this.state.indices.map(index => {
              return <IndexItemPreview key={index.id} index={index} onClick={() => this.handleClick(index)} />
            })
          }
          <Grid.Column width={2} />
        </Grid>
      )
    }
  }
}

export default ShowIndexes
