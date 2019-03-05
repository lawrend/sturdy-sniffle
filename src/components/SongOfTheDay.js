import React, {Component} from 'react';
import { Button, Segment, Dimmer, Loader, Card } from 'semantic-ui-react';

export default class SongOfTheDay extends Component {
  // state = {}

  // handleShow = () => this.setState({active: true})
  // handleHide = () => this.setState({ active: false })

  render() {

    return (
      <div>
        <Dimmer.Dimmable as={Segment} dimmed={this.props.isLoading}>
        <Dimmer active={this.props.isLoading} inverted>
          <Loader>Loooking that up...</Loader>
        </Dimmer>
        <Card fluid>
          <Card.Content header={`Numba One Hit Then: ${this.props.title}`}/>
          <Card.Content description={`by: ${this.props.artist}`} />
        </Card>
      </Dimmer.Dimmable>
  </div>

      )
}
}




