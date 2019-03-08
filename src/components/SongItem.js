import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Image, Card } from 'semantic-ui-react';

export default class SongItem extends Component{

  clickForActions() {
    this.props.getTrackAnalysis(this.props.id);
    this.props.setSelectedTrack(this.props.id);
    this.props.getVideos(this.props.songName + " " + this.props.band);
  }

  render() {
    console.log(this.props.image)
    return (
      <Card>
        <Image src={this.props.image} />
        <Card.Content>
          <Card.Header><Link to={`/songspecifics/${this.props.id}/`} onClick={() => this.clickForActions()} >{this.props.songName}</Link></Card.Header>
          <Card.Meta>By {this.props.band}</Card.Meta>
          <Card.Description>From the album "{this.props.albumName}"</Card.Description>
        </Card.Content>
      </Card>
      )
}

}

