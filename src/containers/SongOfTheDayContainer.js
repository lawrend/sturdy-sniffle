import React, { Component } from 'react';
import SongOfTheDay from '../components/SongOfTheDay.js';
import SongOfTheDayForm from './setSongOfTheDayForm.js'
import { Form } from 'semantic-ui-react';


export default class SongOfTheDayContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      song: {
        title:"Default for Fun",
        artist:"Also Default",
      },
    }
    this.getNumberOneTitle = this.getNumberOneTitle.bind(this);
    this.getNumberOneArtist = this.getNumberOneArtist.bind(this);
    this.newNumberOne = this.newNumberOne.bind(this);
  }

  getNumberOneTitle = (pageToText) => {
    let title = /chart-number-one__title">(.*)</;
    let songTitle = title.exec(pageToText)[1];
    console.log("title: ", songTitle)
    return songTitle
  }

  getNumberOneArtist = (pageToText) => {
    let artist = /chart-number-one__artist">\n*.*\n*(.*)\n/;
    let songArtist = artist.exec(pageToText)[1];
    return songArtist
  }

  newNumberOne = (submittedDate) => {
    fetch(`https://www.billboard.com/charts/pop-songs/${submittedDate}`)
      .then(results => {
        return results.text();
      })
      .then(body => {
        this.setState({
          song: {
            title: this.getNumberOneTitle(body),
            artist: this.getNumberOneArtist(body),
          },
        })
      })
  }



  // componentDidMount() {
  //   fetch(`https://www.billboard.com/charts/pop-songs/${year}-0${month}-${day}`)
  //     .then(results => {
  //       return results.text();
  //     })
  //     .then(body => {
  //       this.setState({
  //         song: {
  //           title: this.getNumberOneTitle(body),
  //           artist: this.getNumberOneArtist(body),
  //         },
  //       })
  //     })
  // }

  render() {
    return (
      <div>
        <SongOfTheDayForm newNumberOne={this.newNumberOne}/>
        <SongOfTheDay artist={this.state.song.artist} title={this.state.song.title} />
      </div>
      )
  }
}

