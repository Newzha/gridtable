import React from 'react'

import 'antd/dist/antd.css';
import { Radio } from 'antd';

export default class App extends React.Component {
  state = {
    isChecked : false
  }
  // 点击radio变化状态
  isCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }
  render() {
    return (
      <Radio
        onClick={this.isCheck}
        checked={this.state.isChecked}
      >
        晚点
      </Radio>
    );
  }
}