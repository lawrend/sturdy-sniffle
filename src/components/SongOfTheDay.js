import React, {Component} from 'react';
import { Button, Segment, Dimmer, Loader, Card } from 'semantic-ui-react';
import styled from 'styled-components';
import '../site/songoftheday.css';

const StyledCard = styled(Card)`
  &&&  {
  background: #efe;
  color: red;
}
`
const StyledSegment = styled(Segment)`
&&& {
background: #dfd;
color: red;
}
`
const StyledDimmer = styled(Dimmer)`
&&& {
background: transparent;
color: red;
}
`

export default class SongOfTheDay extends Component {

  render() {
    return (
      <div>
        <Dimmer.Dimmable as={Segment} dimmed={this.props.isLoading}>
          <Dimmer active={this.props.isLoading} inverted>
            <Loader>Looking that up...</Loader>
          </Dimmer>
          <Card fluid >
            <Card.Content header={`Numba One Hit Then:  ${this.props.title}`}/>
            <Card.Content description={`by:  ${this.props.artist}`} />
          </Card>
        </Dimmer.Dimmable>
      </div>

      )
}
}


// export default class SongOfTheDay extends Component {

//   render() {
//     return (
//       <div>
//         <StyledDimmer.Dimmable as={StyledSegment} dimmed={this.props.isLoading}>
//           <StyledDimmer active={this.props.isLoading} inverted>
//             <Loader>Looking that up...</Loader>
//           </StyledDimmer>
//           <StyledCard fluid >
//             <StyledCard.Content header={`Numba One Hit Then:  ${this.props.title}`}/>
//             <StyledCard.Content description={`by:  ${this.props.artist}`} />
//           </StyledCard>
//         </StyledDimmer.Dimmable>
//       </div>

//       )
// }
// }


