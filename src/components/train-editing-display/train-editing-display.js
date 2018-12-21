import React, {Component} from 'react'

import 'antd/dist/antd.css'
import './train-editing-display.css'
import { Row, Col, Input, Radio, Select } from 'antd';

const InPut = () => (
    <div className="example-input">
      {/*<Input size="large" placeholder="large size" />*/}
      {/*<Input placeholder="default size" />*/}
      <Input size="small" placeholder="" />
    </div>
  )
const SelectValue = () => (

  <Select className="select"
    placeholder="Select a person"
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    <Select.Option value="jack">Jack</Select.Option>
    <Select.Option value="lucy">Lucy</Select.Option>
    <Select.Option value="tom">Tom</Select.Option>
  </Select>
)

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
        <Select className="cascade-select">
        </Select>
        <Select className="cascade-select">
        </Select>
      </div>
)
export default class TrainEditingDisplay extends Component{

  render() {
    return(
      <div className="gutter-example">
        <Row gutter={24} className="gutter-row">
          <Col span={8}>出发股道: <SelectValue/></Col>
          <Col span={8}>车次: <InPut/></Col>
          <Col span={8}>车数: <InPut/></Col>
        </Row>
        <Row className="gutter-row">
          <Col span={8}>股道方向: <SelectValue/></Col>
          <Col span={8}>去向: <SelectValue/></Col>
          <Col span={8}>编组车次: <InPut/></Col>
        </Row>
        <Row className="gutter-row">
          <Col span={6} >列车发站: <CascadeChoice/></Col>
          <Col span={6} offset={6}>到站: <CascadeChoice/></Col>
        </Row>
        <Row className="gutter-row">
          <Col span={6} >编组发站: <CascadeChoice/></Col>
          <Col span={6} offset={6}>经由站: <CascadeChoice/></Col>
        </Row>
        <Row className="gutter-row">
          <Col span={8}>制表人: <InPut/></Col>
          <Col span={8}>检查人: <SelectValue/></Col>
          <Col span={8}>原股道: <InPut/></Col>
        </Row>
        <Row className="gutter-row">
          <Col span={6}>出发日期</Col>
          <Col span={6}>出发时间</Col>
        </Row>
        <Row className="gutter-row">
          <Col span={6}>正点日期</Col>
          <Col span={6}>正点时间</Col>
        </Row>
        <Row className="gutter-row">
          <Col span={8}>晚点原因: <InPut/></Col>
          <Col span={6}><Radio>晚点</Radio></Col>
        </Row>
        <Row className="gutter-row">
          <Col span={8}>机车号码: <InPut/></Col>
        </Row>
      </div>
    )
  }
}
