import React from 'react';
import { Card } from 'semantic-ui-react';

export default props => (
  <Card fluid>
    <Card.Content header={`Numba One Hit Then: ${props.title}`}/>
    <Card.Content description={`by: ${props.artist}`} />
  </Card>
      )
