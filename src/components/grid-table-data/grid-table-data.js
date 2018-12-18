import React from 'react'

import 'antd/dist/antd.css'
import './grid-table-data.css'
import { Row, Col, Table } from 'antd';

export default class GridTableData extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      columns : [
        {
          title: ' ', width: 100, dataIndex: 'order',
        },
        {
          title: '车道', width: 100, dataIndex: 'address201',
        },
        {
          title: '编码', dataIndex: 'address202', width: 150,
        },
        {
          title: '节数', dataIndex: 'address203', width: 150,
        },
        {
          title: '总重', dataIndex: 'address204', width: 150,
        },
        {
          title: '到站', dataIndex: 'address205', width: 150,
        },
      ],
      data : [{
        key: '1',
        order: '1',
        address201: 'B1001201',
        address203: 'B1001203',
        address205: 'B1001205',
      }, {
        key: '2',
        order: '2',
        address201: 'C1002201',
        address203: 'C1002203',
        address205: 'C1002205',
      }, {
        key: '3',
        order: '3',
        address201: 'B201201',
        address202: '3B202202',
        address203: '3B203203',
        address205: '3B205205',
      }, {
        key: '4',
        order: '4',
        address201: 'B201201',
        address203: '4B203203',
        address205: '4B205205',

      }, {
        key: '5',
        order: '5',
        address201: 'B201201',
        address203: '5B203203',
        address205: '5B205205',

      }, {
        key: '6',
        order: '6',
        address201: 'B201201',
        address203: '6B203203',
        address205: '6B205205',

      }, {
        key: '7',
        order: '7',
        address201: 'B201201',
        address203: '7B203203',
        address205: '7B205205',
      }, {
        key: '8',
        order: '8',
        address201: 'B201201',
        address203: '8B203203',
        address205: '8B205205',

      }, {
        key: '9',
        order: '9',
        address201: 'B201201',
        address203: '9B203203',
        address205: '0B205205',

      }, {
        key: '10',
        order: '10',
        address201: 'B201201',
        address202: '10B201201',
        address203: '10B203203',
        address205: '10B205205',

      }, {
        key: '11',
        order: '11',
        address201: 'B201201',
        address203: '11B203203',
        address205: '11B205205',

      }, {
        key: '12',
        order: '12',
        address201: 'B201201',
        address203: '4B203203',
        address205: '4B205205',
      }],
      NoData : [{
        key: '',
        order: '',
        address201: '',
        address203: '',
        address205: '',
      }, {
        key: '',
        order: '',
        address201: '',
        address203: '',
        address205: '',
      }]
    }
  };
  render() {
    const data = this.state.data
    const dataForm = data.slice(0, data.length/2)
    // const dataForm = [data.slice(0, data.length/2).push({key: '21'})]
    console.log(dataForm)
    // const dataForm2 = dataForm.push(data.key)
    // const dataForm3 = dataForm2.push({key: ""})
    // const Data = {key: ''}
    // const dataForm4 =[...dataForm.push(Data)]
    // console.log(dataForm4)
    const dataEnd = data.slice(data.length/2, data.length+1)
    return(
      <div className="gutter-example">
        <Row gutter={3}  type="flex" justify="center">
          <Col className="gutter-row" span={8}>
            <Table
              bordered
              pagination={false}
              columns={this.state.columns}
              dataSource={dataForm}
              title={() => '车站一'}
              footer={() => ''}
            />
            {/*<div className="gutter-box" ></div>*/}
          </Col>
          <Col className="gutter-row" span={8}>
            <Table
              bordered
              pagination={false}
              columns={this.state.columns}
              dataSource={dataEnd}
              title={() => '车站二'}
              footer={() => ' '}
            />
            {/*<div className="gutter-box" ></div>*/}
          </Col>
        </Row>
      </div>
    )
  }
}