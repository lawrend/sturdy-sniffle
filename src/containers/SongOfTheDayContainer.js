import React, { Component } from 'react';
import SongOfTheDay from '../components/SongOfTheDay.js';
import SongOfTheDayForm from './setSongOfTheDayForm.js'
import {getCharts, setNumberOne} from '../store/actions/getCharts.js';
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
