import React, { Component } from 'react';
import { Grid, Form, Divider, Button } from 'semantic-ui-react';
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
    this.props.getCharts(moment(`${year}-${month + 1}-${day}`).startOf('week').format("YYYY-MM-DD"))
    // this.props.setNumberOne(this.props.billboardDOM)
  }

  render() {
    return (
      <div>
        <Divider hidden />
        <Grid columns='equal'>
          <Grid.Column>
            <DateSelector />
          </Grid.Column>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Dropdown onChange ={this.handleChange } selection clearable options={YEARS} placeholder="Year" name="year" label="Year" />

              <Form.Dropdown onChange ={this.handleChange } selection clearable options={MONTHS} placeholder="Month" name="month" label="Month"/>

              <Form.Dropdown onChange ={this.handleChange } selection clearable options={THIRTY_ONE_DAYS} placeholder="Day" name="day" label="Day" />

              <Button type='submit'>Submit</Button>

            </Form>
          </Grid.Column>
        </Grid>
        <Divider hidden/>
      </div>
      )
}

}
