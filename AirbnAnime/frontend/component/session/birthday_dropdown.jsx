import React, { Component } from 'react';

import { YearPicker, MonthPicker, DayPicker } from 'react-dropdown-date';

class BirhdayDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { year: null, month: null, day: null };
    }

    render() {
        return (
            <div>
                <YearPicker
                    defaultValue={'select year'}
                    // default is 1900
                    start={2010}
                    // default is current year
                    end={2020}
                    // default is ASCENDING
                    reverse
                    // default is false
                    required={true}
                    // default is false
                    disabled={true}
                    // mandatory
                    value={this.state.year}
                    // mandatory
                    onChange={(year) => {
                        this.setState({ year });
                        console.log(year);
                    }}
                    id={'year'}
                    name={'year'}
                    classes={'classes'}
                    optionClasses={'option classes'}
                />
                <MonthPicker
                    defaultValue={'select month'}
                    // to get months as numbers
                    numeric
                    // default is full name
                    short
                    // default is Titlecase
                    caps
                    // mandatory if end={} is given in YearPicker
                    endYearGiven
                    // mandatory
                    year={this.state.year}
                    // default is false
                    required={true}
                    // default is false
                    disabled={true}
                    // mandatory
                    value={this.state.month}
                    // mandatory
                    onChange={(month) => {
                        this.setState({ month });
                        console.log(month);
                    }}
                    id={'month'}
                    name={'month'}
                    classes={'classes'}
                    optionClasses={'option classes'}
                />
                <DayPicker
                    defaultValue={'select day'}
                    // mandatory
                    year={this.state.year}
                    // mandatory
                    month={this.state.month}
                    // mandatory if end={} is given in YearPicker
                    endYearGiven
                    // default is false
                    required={true}
                    // default is false
                    disabled={true}
                    // mandatory
                    value={this.state.day}
                    // mandatory
                    onChange={(day) => {
                        this.setState({ day });
                        console.log(day);
                    }}
                    id={'day'}
                    name={'day'}
                    classes={'classes'}
                    optionClasses={'option classes'}
                />
            </div>
        );
    }
}

export default BirhdayDropdown;
