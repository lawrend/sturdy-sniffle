import React, {Component} from 'react';
import { Button, Segment, Dimmer, Loader, Card } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  &&&  {
  background: #efe;
  margin: 0;
}
`
const StyledSegment = styled(Segment)`
&&& {
background: #dfd;
padding: 2em;
}
`
const StyledDimmer = styled(Dimmer)`
&&& {
background: transparent;
}
`


export default class SongOfTheDay extends Component {

  render() {
    return (
      <div>
        <StyledDimmer.Dimmable as={StyledSegment} dimmed={this.props.isLoading}>
          <StyledDimmer active={this.props.isLoading} inverted>
            <Loader>Looking that up...</Loader>
          </StyledDimmer>
          <StyledCard fluid >
            <StyledCard.Content header={`Numba One Hit Then:  ${this.props.title}`}/>
            <StyledCard.Content description={`by:  ${this.props.artist}`} />
          </StyledCard>
        </StyledDimmer.Dimmable>
      </div>

      )
}
}


