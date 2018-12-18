import React from 'react'

import 'antd/dist/antd.css'
import './table-group.css'
import { Row, Col, Table } from 'antd';

export default class GridTableData extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      columns1 : [
        {title: '201', dataIndex: 'col201', width: 30,},
      ],
      columns2 : [
        {title: '202', dataIndex: 'col202', width: 30,},
      ],
      columns3 : [
        {title: '203', dataIndex: 'col203', width: 30,},
      ],
      columns4 : [
        {title: '204', dataIndex: 'col204', width: 30,},
      ],
      columns5 : [
        {title: '205', dataIndex: 'col205', width:30,},
      ],
      columns6 : [
        {title: '206', dataIndex: 'col206', width: 30,},
      ],

      data201 : [{key: '1', col201: 'N020101',},
        {key: '2', col201: 'N020102'},
        {key: '3', col201: 'N020103'}],
      data202 : [{key: '1', col202: 'N0202'},
        {key: '2', col202: 'N0202'},
        {key: '3', col202: 'N0203'
        }],
      data204 : [{key: '1', col204: 'N0204'},
        {key: '2', col204: 'N0204'}],
      NoData : [{key: '',}, {key: '',}]
    }
  };
  render() {
    // const data = this.state.data
    // const dataForm = data.slice(0, data.length/2)
    // const dataForm = [data.slice(0, data.length/2).push({key: '21'})]
    // console.log(dataForm)
    // const dataForm2 = dataForm.push(data.key)
    // const dataForm3 = dataForm2.push({key: ""})
    // const Data = {key: ''}
    // const dataForm4 =[...dataForm.push(Data)]
    // console.log(dataForm4)
    // const dataEnd = data.slice(data.length/2, data.length+1)
    return(
      <div className="gutter-example">
        <Row gutter={3}  type="flex" justify="center">
          <Col className="gutter-row" span={4}>
            <Table
              bordered
              pagination={false}
              columns={this.state.columns1}
              dataSource={this.state.data201}
            />
          </Col>
          <Col className="gutter-row" span={4}>
            <Table
              bordered
              pagination={false}
              columns={this.state.columns2}
              dataSource={this.state.data202}
            />
          </Col>
          <Col className="gutter-row" span={4}>
            <Table
              bordered
              pagination={false}
              columns={this.state.columns3}
              dataSource={this.state.NoData}
            />
          </Col>
          <Col className="gutter-row" span={4}>
            <Table
              bordered
              pagination={false}
              columns={this.state.columns4}
              dataSource={this.state.data204}
            />
          </Col>
          <Col className="gutter-row" span={4}>
            <Table
              bordered
              pagination={false}
              columns={this.state.columns5}
              dataSource={this.state.NoData}
            />
          </Col>
          <Col className="gutter-row" span={4}>
            <Table
              bordered
              pagination={false}
              columns={this.state.columns6}
              dataSource={this.state.NoData}
            />
          </Col>
        </Row>
      </div>
    )
  }
}