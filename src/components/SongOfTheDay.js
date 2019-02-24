import React from 'react';
import { Card } from 'semantic-ui-react';

export default props => (
  <Card>
    <Card.Content header={`Song of The Day: ${props.title}`}/>
    <Card.Content description={`by ${props.artist}`} />
  </Card>
      )
