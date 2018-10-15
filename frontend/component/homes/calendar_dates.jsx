import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import DatePicker from 'react-datepicker';


class MyApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: '',
      endDate: '',
      focusedInput: '',
    }
  }

  render(){
    return (
      <div>
        <DateRangePicker
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
      </div>
    )
  }
}

export default MyApp;
