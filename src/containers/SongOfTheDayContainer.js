import React, { Component } from 'react';
import SongOfTheDay from '../components/SongOfTheDay.js';
import SongOfTheDayForm from './setSongOfTheDayForm.js'
import {getCharts, setNumberOne} from '../store/actions/getCharts.js';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  chartGetter(submittedDate){
    return dispatch(getCharts(submittedDate))
  },
  numeroUno(UnoInfo){
    return dispatch(setNumberOne(UnoInfo))
  },
})

const mapStateToProps = state => ({
  billboardDOM: state.charts.billboardDOM,
  songTitle: state.charts.numberOne.title,
  songArtist: state.charts.numberOne.artist,
})

class SongOfTheDayContainer extends Component {
  constructor(props) {
    super(props)

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

  }

  render() {
    return (
      <div>
        <SongOfTheDayForm billboardDOM={this.props.billboardDOM} setNumberOne={this.props.numeroUno} getCharts={this.props.chartGetter}/>
        <SongOfTheDay artist={this.props.songArtist} title={this.props.songTitle} />
      </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongOfTheDayContainer);
