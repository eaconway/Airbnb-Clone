import React from 'react';
import Calendar from 'react-calendar';


// Using code from React Calendar: https://www.npmjs.com/package/react-calendar

class MyApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default MyApp;
