import React, { Component } from 'react';
import SongOfTheDay from '../components/SongOfTheDay.js';
import SongOfTheDayForm from './setSongOfTheDayForm.js'
import {getCharts, setNumberOne, setLoading} from '../store/actions/getCharts.js';
import { setThrowbackFromDropdown } from '../store/actions/setThrowbackDate.js';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  chartGetter(submittedDate){
    return dispatch(getCharts(submittedDate))
  },
  numeroUno(UnoInfo){
    return dispatch(setNumberOne(UnoInfo))
  },
  setThrowback(date){
    return dispatch(setThrowbackFromDropdown(date))
  },
  setLoadingState(loading){
    return dispatch(setLoading(loading))
  }
})

const mapStateToProps = state => ({
  billboardDOM: state.charts.billboardDOM,
  songTitle: state.charts.numberOne.title,
  songArtist: state.charts.numberOne.artist,
  isLoading: state.charts.isLoading,
})

class SongOfTheDayContainer extends Component {
  render() {
    return (
      <div className="SongOfTheDay">
        <h1>What Song was #1?</h1>
        <SongOfTheDayForm billboardDOM={this.props.billboardDOM} setNumberOne={this.props.numeroUno} getCharts={this.props.chartGetter} setThrowbackFromDropdown={this.props.setThrowback} setLoading={this.props.setLoadingState}  />
        <SongOfTheDay artist={this.props.songArtist} title={this.props.songTitle} isLoading={this.props.isLoading} />
      </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongOfTheDayContainer);
