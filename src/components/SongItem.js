import React from 'react';


export default props => (

  <div className="Song-Item">
    <ul>
      <li>Band: {props.band}</li>
      <li>Album Type: {props.albumType}</li>
      <li>Name: {props.albumName}</li>
    </ul>
  </div>
  )

