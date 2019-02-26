import React from 'react';
import DayPicker, { LocalUtils } from 'react-day-picker';
import moment from 'moment';

import 'react-day-picker/lib/style.css';

//set first day of the week to saturday because billboard charts
moment.updateLocale('en', {
  week: {
    dow: 6,
  }
}
)

export default class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
      firstDay: undefined,
    };
  }
  handleDayClick(day, { selected }) {
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined, firstDay: undefined });
      return;
    }
    this.setState({ selectedDay: day , firstDay: moment(day).startOf('week').format("YYYY-MM-DD")});
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
      </div>
    );
  }
}

///***NOTE selectedDays above is plural on purpose! it is for the css class bruh***
