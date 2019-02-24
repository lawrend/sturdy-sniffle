import React, { Component } from 'react';
import { Button, Dropdown, Form, Divider } from 'semantic-ui-react';
import { YEARS, MONTHS, DAYS }from '../resources/dateOptions.js';

export default class SongOfTheDayForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: "",
      submittedYear: "",
      month: "",
      submittedMonth: "",
      day: "",
      submittedDay: "",
    }
    this.dateMaker = this.dateMaker.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { year, month, day } = this.state

    this.setState({ submittedYear: year, submittedMonth: month, submittedDay: day })
  }

  dateMaker(year, month, day) {
    let submitted_date = new Date(year, month - 1, day);
    let submitted_day = submitted_date.getDay();
    let week_of_submitted_date = new Date(year, month - 1, day - (submitted_day + 1));
    return week_of_submitted_date;
  }


  render() {
    const {year, submittedYear, month, submittedMonth, day, submittedDay} = this.state
    return (
      <div>
        <Divider hidden />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Dropdown onChange ={this.handleChange } selection clearable options={YEARS} placeholder="Year" name="year" />

            <Form.Dropdown onChange ={this.handleChange } selection clearable options={MONTHS} placeholder="Month" name="month" />

            <Form.Dropdown onChange ={this.handleChange } selection clearable options={DAYS} placeholder="Day" name="day" />
            <Button type='submit'>Submit</Button>
          </Form.Group>
        </Form>
      </div>
      )
}

}
