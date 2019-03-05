import React from 'react';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';

const mapStateToProps = state => ({
  throwbackDate: state.charts.throwbackDate,
})

//set first day of the week to saturday because billboard charts
//
moment.updateLocale('en', {
  week: {
    dow: 6,
  }
}
)

class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayClick(day, { selected }) {
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined, });
      return;
    }
    this.props.setLoading(true);
    const startOfWeek = moment(day).startOf('week').format("YYYY-MM-DD");
    this.setState({ selectedDay: day});
    this.props.setThrowback(startOfWeek);
    this.props.getCharts(startOfWeek);
  }

  render() {
    return (
      <div>
        <DayPicker
          firstDayOfWeek={6}
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
            {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDay.toLocaleDateString()} and the start of the week is {this.state.firstDay} </p>

          ) : (
          <p>Please select a day.</p>
          )}
          {this.props.throwbackDate ? (<p>the throwback date is {this.props.throwbackDate}</p>) : (<p>nothing yet throwback date wise</p>)}
        </div>
        );
  }
}

export default connect(mapStateToProps)(DateSelector);
///***NOTE selectedDays above is plural on purpose! it is for the css class bruh***
