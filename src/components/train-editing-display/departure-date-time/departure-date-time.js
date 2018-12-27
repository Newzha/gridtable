
import React from 'react';
import 'antd/dist/antd.css';
import './departure-date-time.css';
import { DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default class DateRange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startValue: null,
      endValue: null,
      endOpen: false,
      isStart: this.props.isStart
    };
  }
  // 开始日期要大于结束日期
  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }
  // 结束日期不得大于结束日期
  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }
// 字段变化发生的回调
  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }
// 日期范围发生变化的回调
  onStartChange = (value) => {
    this.onChange('startValue', value);
  }
// 日期范围发生变化的回调
  onEndChange = (value) => {
    this.onChange('endValue', value);
  }
// 弹出日历和关闭日历的回调
  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }
// 弹出日历和关闭日历的回调
  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

  render() {
    const { startValue, endValue, endOpen,isStart } = this.state;
    if(isStart == 'start') {
      return (
        <div className="datePicker">
          <DatePicker
            locale={locale}
            size="small"
            style={{width: 'auto'}}
            disabledDate={this.disabledStartDate}
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            // defaultValue={moment("2010-10-20 4:30", "YYYY-MM-DD HH:mm")}
            value={startValue}
            placeholder="请选择出发日期"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
          />
          {/*<DatePicker*/}
            {/*locale={locale}*/}
            {/*disabledDate={this.disabledEndDate}*/}
            {/*// disabledTime*/}
            {/*showTime*/}
            {/*format="YYYY-MM-DD HH:mm"*/}
            {/*value={endValue}*/}
            {/*placeholder="End"*/}
            {/*onChange={this.onEndChange}*/}
            {/*open={endOpen}*/}
            {/*onOpenChange={this.handleEndOpenChange}*/}
          {/*/>*/}
        </div>
      );
    } else {
      return (
        <div className="datePicker">
          {/*<DatePicker*/}
            {/*locale={locale}*/}
            {/*disabledDate={this.disabledStartDate}*/}
            {/*showTime*/}
            {/*format="YYYY-MM-DD HH:mm"*/}
            {/*value={startValue}*/}
            {/*placeholder="Start"*/}
            {/*onChange={this.onStartChange}*/}
            {/*onOpenChange={this.handleStartOpenChange}*/}
          {/*/>*/}
          <DatePicker
            locale={locale}
            size="small"
            style={{width: 'auto'}}
            disabledDate={this.disabledEndDate}
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            // Value={moment('YYYY-MM-DD HH:mm')}
            value={endValue}
            placeholder="请选择正点日期"
            onChange={this.onEndChange}
            open={endOpen}
            onOpenChange={this.handleEndOpenChange}
          />
        </div>
      );
    }
  }
}


