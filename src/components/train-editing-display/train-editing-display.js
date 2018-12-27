import React, {Component} from 'react'

import DateRange from './departure-date-time/departure-date-time'
import RadioClick from './radio-click/redio-click'
import 'antd/dist/antd.css'
import './train-editing-display.css'
import { Row, Col, Input, Radio, Select } from 'antd';
// 输入框组件
const InPut = () => (
    <div className="example-input">
      {/*<Input size="large" placeholder="large size" />*/}
      {/*<Input placeholder="default size" />*/}
      <Input size="small" placeholder="" />
    </div>
  )
// 下拉选组件
const SelectValue = () => (
  <Select className="select" size="small"
    placeholder="Select a person"
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Select.Option value="jack">Jack</Select.Option>
    <Select.Option value="lucy">Lucy</Select.Option>
    <Select.Option value="tom">Tom</Select.Option>
  </Select>
)
// 级联选择组件
const CascadeChoice = () => (
// const provinceData = ['Zhejiang', 'Jiangsu'];
// const cityData = {
//   Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
//   Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
// };
//
// class App extends React.Component {
//   state = {
//     cities: cityData[provinceData[0]],
//     secondCity: cityData[provinceData[0]][0],
//   }
//
//   handleProvinceChange = (value) => {
//     this.setState({
//       cities: cityData[value],
//       secondCity: cityData[value][0],
//     });
//   }
//
//   onSecondCityChange = (value) => {
//     this.setState({
//       secondCity: value,
//     });
//   }
    // const { cities } = this.state;
      <div className="cascadeSelect">
        <Select className="cascade-select" size="small">
        </Select>
        <Select className="cascade-select" size="small">
        </Select>
      </div>
)
export default class TrainEditingDisplay extends Component{

  render() {
    return(
      <div className="gutter-example">
        <Row  className="gutter-row">
          <Col className="gutter-box" span={6} offset={1}>出发股道: <SelectValue/></Col>
          <Col className="gutter-box" span={6} offset={1}>车次: <InPut/></Col>
          <Col className="gutter-box" span={6} offset={1}>车数: <InPut/></Col>
        </Row>
        <Row className="gutter-row">
          <Col className="gutter-box" span={6} offset={1}>股道方向: <SelectValue/></Col>
          <Col className="gutter-box" span={6} offset={1}>去向: <SelectValue/></Col>
          <Col className="gutter-box" span={6} offset={1}>编组车次: <InPut/></Col>
        </Row>
        <Row className="gutter-row">
          <Col className="gutter-box" span={6} offset={1} >列车发站: <CascadeChoice/></Col>
          <Col className="gutter-box" span={6} offset={2}>到   站: <CascadeChoice/></Col>
        </Row>
        <Row className="gutter-row">
          <Col className="gutter-box" span={6} offset={1} >编组发站: <CascadeChoice/></Col>
          <Col className="gutter-box" span={6} offset={2}>经由站: <CascadeChoice/></Col>
        </Row>
        <Row className="gutter-row">
          <Col className="gutter-box" span={6} offset={1}>制表人: <InPut/></Col>
          <Col className="gutter-box" span={6} offset={1}>检查人: <SelectValue/></Col>
          <Col className="gutter-box" span={6} offset={1}>原股道: <InPut/></Col>
        </Row>
        <Row className="gutter-row">
          <Col className="gutter-box" span={6} offset={1}>出发日期: <DateRange isStart={'start'}/></Col>
          {/*<Col span={6} offset={1}>出发时间</Col>*/}
        </Row>
        <Row className="gutter-row">
          <Col className="gutter-box" span={6} offset={1}>正点日期: <DateRange isStart={'end'}/></Col>
          {/*<Col span={6} offset={1}>正点时间</Col>*/}
        </Row>
        <Row className="gutter-row">
          <Col className="gutter-box" span={6} offset={1}>晚点原因: <InPut/></Col>
          <Col className="gutter-box" span={6} offset={1}><RadioClick/></Col>
        </Row>
        <Row className="gutter-row">
          <Col className="gutter-box" span={6} offset={1}>机车号码: <InPut/></Col>
        </Row>
      </div>
    )
  }
}
