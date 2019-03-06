import React, {Component} from 'react';
import { Button, Segment, Dimmer, Loader, Card } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  &&&  {
  background: transparent;
}
  `
const StyledSegment = styled(Segment)`
&&& {
background: transparent;
}
`
const StyledDimmer = styled(Dimmer)`
&&& {
background: transparent;
}
`

export default class SongOfTheDay extends Component {
  // state = {}

  // handleShow = () => this.setState({active: true})
  // handleHide = () => this.setState({ active: false })

  render() {

    return (
      <div>
        <StyledDimmer.Dimmable as={StyledSegment} dimmed={this.props.isLoading}>
          <StyledDimmer active={this.props.isLoading} inverted>
            <Loader>Loooking that up...</Loader>
          </StyledDimmer>
          <StyledCard>
            <StyledCard.Content header={`Numba One Hit Then: ${this.props.title}`}/>
            <StyledCard.Content description={`by: ${this.props.artist}`} />
          </StyledCard>
        </StyledDimmer.Dimmable>
      </div>

      )
}
}


// return (
//       <div>
//         <Dimmer.Dimmable as={Segment} dimmed={this.props.isLoading}>
//         <Dimmer active={this.props.isLoading} inverted>
//           <Loader>Loooking that up...</Loader>
//         </Dimmer>
//         <Card fluid>
//           <Card.Content header={`Numba One Hit Then: ${this.props.title}`}/>
//           <Card.Content description={`by: ${this.props.artist}`} />
//         </Card>
//       </Dimmer.Dimmable>
//   </div>

//       )
// }
// }


