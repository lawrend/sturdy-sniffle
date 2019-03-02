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


// i took out the code below because i want to see if putting clickforactions on the card itself works but don't want to mess with it right now
// <Card.Content>
//     <Card.Header><Link to={`/songspecifics/${this.props.id}/`} onClick={() => this.clickForActions()} >{this.props.songName}</Link></Card.Header>
//     <Card.Meta>By {this.props.band}</Card.Meta>
//     <Card.Description>From the album "{this.props.albumName}"</Card.Description>
//   </Card.Content>
//   <Card.Content extra>
//     <Link to={`/songspecifics/${this.props.id}/`}>
//       <Button fluid basic floated='left' color='green' onClick={() => this.clickForActions()}>
//         Ye
//       </Button>
//     </Link>
//     <Link to={`/songspecifics/${this.props.id}/`} >
//       <Button fluid basic floated='right' color='red' onClick={() => this.clickForActions()}>
//         Nah
//       </Button>
//     </Link>
//   </Card.Content>
//
//
//   i took out this because i couldn't figure out how to add a button that was a route and an action call. what a dummy am i?
//
// <Card.Content extra>
//           <Link to={`/songspecifics/${this.props.id}/`}>
//             <Button fluid basic floated='left' color='green' onClick={() => this.clickForActions()}>
//               Ye
//             </Button>
//           </Link>
//           <Link to={`/songspecifics/${this.props.id}/`} >
//             <Button fluid basic floated='right' color='red' onClick={() => this.clickForActions()}>
//               Nah
//             </Button>
//           </Link>
//         </Card.Content>


