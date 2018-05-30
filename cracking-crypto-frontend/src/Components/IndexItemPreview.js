import React from 'react'
import { Grid, Card } from 'semantic-ui-react'


class IndexItemPreview extends React.Component{


  render(){
    return(
        <Grid.Column width={6}>
          <Card.Group
            onClick={this.props.onClick}
            image='/assets/images/avatar/large/elliot.jpg'
            items={[{header: this.props.index.name, description: `Objective: ${this.props.index.objective}`, meta: 'ROI'}]} />
        </Grid.Column>
    )
  }
}

export default IndexItemPreview
