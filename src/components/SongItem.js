import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Card } from 'semantic-ui-react';

export default class SongItem extends Component{

  clickForActions() {
    this.props.getTrackAnalysis(this.props.id);
    this.props.setSelectedTrack(this.props.id);
    this.props.getVideos(this.props.songName + " " + this.props.band);
  }

  render() {
    return (
      <div className="Song-Item">
        <Container fluid>
        <Card>
          <Card.Content>
            <Card.Header><Link to={`/songspecifics/${this.props.id}/`} onClick={() => this.clickForActions()} >{this.props.songName}</Link></Card.Header>
            <Card.Meta>By {this.props.band}</Card.Meta>
            <Card.Description>From the album "{this.props.albumName}"</Card.Description>
        </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Ye
                </Button>
                <Button basic color='red'>
                  Nah
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Container>
        </div>
        )
        }

        }
