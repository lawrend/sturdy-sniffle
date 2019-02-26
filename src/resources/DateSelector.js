import React from 'react';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
      .add(i, 'days')
      .toDate()
    );
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date)
    .startOf('week')
    .toDate(),
    to: moment(date)
    .endOf('week')
    .toDate(),
  };
}

export default class Example extends React.Component {
  state = {
    hoverRange: undefined,
    selectedDays: [],
  };

  handleDayChange = date => {
    this.setState({
      selectedDays: getWeekDays(getWeekRange(date).from),
    });
  };

  handleDayEnter = date => {
    this.setState({
      hoverRange: getWeekRange(date),
    });
  };

  handleDayLeave = () => {
    this.setState({
      hoverRange: undefined,
    });
  };

  handleWeekClick = (weekNumber, days, e) => {
    this.setState({
      selectedDays: days,
    });
  };

  render() {
    const { hoverRange, selectedDays } = this.state;

    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };

    return (
      <div className="SelectedWeekExample">
        <DayPicker
          selectedDays={selectedDays}
          showWeekNumbers
          showOutsideDays
          modifiers={modifiers}
          onDayClick={this.handleDayChange}
          onDayMouseEnter={this.handleDayEnter}
          onDayMouseLeave={this.handleDayLeave}
          onWeekClick={this.handleWeekClick}
        />
            <div>{moment(selectedDays[0]).format('LL')}</div>
          </div>
          );
  }
}
// <Helmet>
//           <style>{`
//             .SelectedWeekExample .DayPicker-Month {
//               border-collapse: separate;
//             }
//             .SelectedWeekExample .DayPicker-WeekNumber {
//               outline: none;
//             }
//             .SelectedWeekExample .DayPicker-Day {
//               outline: none;
//               border: 1px solid transparent;
//             }
//             .SelectedWeekExample .DayPicker-Day--hoverRange {
//               background-color: #EFEFEF !important;
//             }

//             .SelectedWeekExample .DayPicker-Day--selectedRange {
//               background-color: #fff7ba !important;
//               border-top-color: #FFEB3B;
//               border-bottom-color: #FFEB3B;
//               border-left-color: #fff7ba;
//               border-right-color: #fff7ba;
//             }

//             .SelectedWeekExample .DayPicker-Day--selectedRangeStart {
//               background-color: #FFEB3B !important;
//               border-left: 1px solid #FFEB3B;
//             }

//             .SelectedWeekExample .DayPicker-Day--selectedRangeEnd {
//               background-color: #FFEB3B !important;
//               border-right: 1px solid #FFEB3B;
//             }

//             .SelectedWeekExample .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
//             .SelectedWeekExample .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
//               border-radius: 0 !important;
//               color: black !important;
//             }
//             .SelectedWeekExample .DayPicker-Day--hoverRange:hover {
//               border-radius: 0 !important;
//             }
//           `}</style>
//         </Helmet>

// import React from 'react';
// import DayPicker, { LocalUtils } from 'react-day-picker';

// import 'react-day-picker/lib/style.css';

// export default class BasicConcepts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDayClick = this.handleDayClick.bind(this);
//     this.state = {
//       selectedDay: undefined,
//       firstDay: undefined,
//     };
//   }
//   handleDayClick(day, { selected }) {
//     if (selected) {
//       // Unselect the day if already selected
//       this.setState({ selectedDay: undefined });
//       return;
//     }
//     this.setState({ selectedDay: day });
//   }
//   render() {
//     return (
//       <div>
//         <DayPicker
//           onDayClick={this.handleDayClick}
//           selectedDays={this.state.selectedDay}
//         />
//         {this.state.selectedDay ? (
//           <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
//         ) : (
//           <p>Please select a day.</p>
//         )}
//       </div>
//     );
//   }
// }
// import React from 'react';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';

// const currentYear = new Date().getFullYear();
// const fromMonth = new Date(currentYear, 0);
// const toMonth = new Date(currentYear + 10, 11);

// function YearMonthForm({ date, localeUtils, onChange }) {
//   const months = localeUtils.getMonths();

//   const years = [];
//   for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
//     years.push(i);
//   }

//   const handleChange = function handleChange(e) {
//     const { year, month } = e.target.form;
//     onChange(new Date(year.value, month.value));
//   };

//   return (
//     <form className="DayPicker-Caption">
//       <select name="month" onChange={handleChange} value={date.getMonth()}>
//         {months.map((month, i) => (
//           <option key={month} value={i}>
  //             {month}
//           </option>
//         ))}
//       </select>
//       <select name="year" onChange={handleChange} value={date.getFullYear()}>
//         {years.map(year => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         ))}
//       </select>
//     </form>
//   );
// }

// export default class DateSelector extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleYearMonthChange = this.handleYearMonthChange.bind(this);
//     this.state = {
//       month: fromMonth,
//     };
//   }
//   handleYearMonthChange(month) {
//     this.setState({ month });
//   }
//   render() {
//     return (
//       <div className="YearNavigation">
//         <DayPicker
//           month={this.state.month}
  //           fromMonth={fromMonth}
//           toMonth={toMonth}
//           captionElement={({ date, localeUtils }) => (
//             <YearMonthForm
//               date={date}
//               localeUtils={localeUtils}
//               onChange={this.handleYearMonthChange}
//             />
  //           )}
  //         />
//       </div>
//     );
//   }
// }
