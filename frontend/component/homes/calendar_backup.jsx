import Calendar from 'rc-calendar';
import Picker from 'rc-calendar/lib/Picker';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import TimePickerPanel from 'rc-time-picker/lib/Panel';

//Sample code from
// - http://react-component.github.io/calendar/examples/antd-range-calendar.html

function newArray(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  const date = moment();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.isBefore(date);  // can not select days before today
}

function disabledTime(time, type) {
  console.log('disabledTime', time, type);

  if (type === 'start') {
    return {
      disabledHours() {
        const hours = newArray(0, 60);
        hours.splice(20, 4);
        return hours;
      },
      disabledMinutes(h) {
        if (h === 20) {
          return newArray(0, 31);
        } else if (h === 23) {
          return newArray(30, 60);
        }
        return [];
      },
      disabledSeconds() {
        return [55, 56];
      },
    };
  }

  return {
    disabledHours() {
      const hours = newArray(0, 60);
      hours.splice(2, 6);
      return hours;
    },
    disabledMinutes(h) {
      if (h === 20) {
        return newArray(0, 31);
      } else if (h === 23) {
        return newArray(30, 60);
      }
      return [];
    },
    disabledSeconds() {
      return [55, 56];
    },
  };
}

const formatStr = 'YYYY-MM-DD HH:mm:ss';
function format(v) {
  return v ? v.format(formatStr) : '';
}

function isValidRange(v) {
  return v && v[0] && v[1];
}

function onStandaloneChange(value) {
  console.log('onChange');
  console.log(value[0] && format(value[0]), value[1] && format(value[1]));
}

function onStandaloneSelect(value) {
  console.log('onSelect');
  console.log(format(value[0]), format(value[1]));
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      hoverValue: [],
    };
  }

  onChange = (value) => {
    console.log('onChange', value);
    this.setState({ value });
  }

  onHoverChange = (hoverValue) => {
    this.setState({ hoverValue });
  }

  render() {
    const state = this.state;
    const calendar = (
      <RangeCalendar
        hoverValue={state.hoverValue}
        onHoverChange={this.onHoverChange}
        showWeekNumber={false}
        dateInputPlaceholder={['start', 'end']}
        defaultValue={[now, now.clone().add(1, 'months')]}
        locale={cn ? zhCN : enUS}
        disabledTime={disabledTime}
        timePicker={timePickerElement}
      />
    );
    return (
      <Picker
        value={state.value}
        onChange={this.onChange}
        animation="slide-up"
        calendar={calendar}
      >
        {
          ({ value }) => {
            return (<span>
                <input
                  placeholder="please select"
                  style={{ width: 350 }}
                  disabled={state.disabled}
                  readOnly
                  className="ant-calendar-picker-input ant-input"
                  value={isValidRange(value) && `${format(value[0])} - ${format(value[1])}` || ''}
                />
                </span>);
          }
        }
      </Picker>);
  }
}

ReactDOM.render(
  <div>
    <h2>calendar</h2>
    <div style={{ margin: 10 }}>
      <RangeCalendar
        showToday={false}
        showWeekNumber
        dateInputPlaceholder={['start', 'end']}
        locale={cn ? zhCN : enUS}
        showOk={false}
        showClear
        format={formatStr}
        onChange={onStandaloneChange}
        onSelect={onStandaloneSelect}
        disabledDate={disabledDate}
        timePicker={timePickerElement}
        disabledTime={disabledTime}
        renderFooter={() => <span>extra footer</span>}
      />
    </div>
    <br />

    <div style={{ margin: 20 }}>
      <Demo />
    </div>
  </div>, document.getElementById('__react-content'));
