import React, { Component } from 'react';
import { Container, Button, Dropdown, Form, Divider } from 'semantic-ui-react';
import { YEARS, MONTHS, THIRTY_ONE_DAYS, THIRTY_DAYS, TWENTY_EIGHT_DAYS, TWENTY_NINE_DAYS }from '../resources/dateOptions.js';
import DateSelector from '../resources/DateSelector.js';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { year, month, day } = this.state
    this.setState({ submittedYear: year, submittedMonth: month, submittedDay: day })
    this.props.getCharts(moment(`${year}-${month}-${day}`).startOf('week').format("YYYY-MM-DD"))
    this.props.setNumberOne(this.props.billboardDOM)
  }

  render() {
    const {year, submittedYear, month, submittedMonth, day, submittedDay} = this.state;
    return (
      <div>
        <Divider hidden />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Dropdown onChange ={this.handleChange } selection clearable options={YEARS} placeholder="Year" name="year" />

            <Form.Dropdown onChange ={this.handleChange } selection clearable options={MONTHS} placeholder="Month" name="month" />

            <Form.Dropdown onChange ={this.handleChange } selection clearable options={THIRTY_ONE_DAYS} placeholder="Day" name="day" />
            <Button type='submit'>Submit</Button>
          </Form.Group>
        </Form>
        <Container>
          <DateSelector />
        </Container>
      </div>
      )
}

}
