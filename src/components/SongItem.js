import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Divider, Image, Container, Button, Card } from 'semantic-ui-react';

export default class SongItem extends Component{

  clickForActions() {
    this.props.getTrackAnalysis(this.props.id);
    this.props.setSelectedTrack(this.props.id);
    this.props.getVideos(this.props.songName + " " + this.props.band);
  }

  render() {
    console.log(this.props.image)
    return (
      <div className="Song-Item">
        <Divider hidden />
        <Container fluid>
          <Card>
            <Image src={this.props.image} />
            <Card.Content>
              <Card.Header><Link to={`/songspecifics/${this.props.id}/`} onClick={() => this.clickForActions()} >{this.props.songName}</Link></Card.Header>
              <Card.Meta>By {this.props.band}</Card.Meta>
              <Card.Description>From the album "{this.props.albumName}"</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/songspecifics/${this.props.id}/`}>
                  <Button basic floated='left' color='green' onClick={() => this.clickForActions()}>
                    Ye
                  </Button>
                </Link>
                <Link to={`/songspecifics/${this.props.id}/`} >
                  <Button basic floated='right' color='red' onClick={() => this.clickForActions()}>
                    Nah
                  </Button>
                </Link>
            </Card.Content>
          </Card>
        </Container>
      </div>
      )
}

}

