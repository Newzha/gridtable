import React from 'react'

import 'antd/dist/antd.css'
import './table-group.css'
import { Row, Col, Table } from 'antd';

const ColTable = ({span=4, columns, dataSource}) => (
  <Col className="gutter-row" span={span}>
    <Table
      bordered
      pagination={false}
      columns={columns}
      dataSource={dataSource}
    />
  </Col>
)

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
      columns7 : [
        {title: '207', dataIndex: 'col207', width: 30,},
      ],
      columns8 : [
        {title: '208', dataIndex: 'col208', width: 30,},
      ],
      columns9 : [
        {title: '209', dataIndex: 'col209', width: 30,},
      ],
      columns10 : [
        {title: '2010', dataIndex: 'col2010', width: 30,},
      ],


      data201 :
        [{key: '1', col201: 'N020101',},
          {key: '2', col201: 'N020102'},
          {key: '3', col201: 'N020103'}],
      data202 :
        [{key: '1', col202: 'N0202'},
          {key: '2', col202: 'N0202'},
          {key: '3', col202: 'N0203'}],
      data204 :
        [{key: '1', col204: 'N0204'},
        {key: '2', col204: 'N0204'}],
      // data : [
      //   {data201 :
      //
      //     [{key: '1', col201: 'N020101',},
      //       {key: '2', col201: 'N020102'},
      //       {key: '3', col201: 'N020103'}],},
      //   {data202 :
      //     [{key: '1', col202: 'N0202'},
      //       {key: '2', col202: 'N0202'},
      //       {key: '3', col202: 'N0203'}],},
      //   {data204 :
      //     [{key: '1', col204: 'N0204'},
      //       {key: '2', col204: 'N0204'}],}
      //
      // ],
      NoData :
        [{key: '',}, {key: '',}],
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
        {/*<Table scroll={{ x: 1300 }} >*/}
         {/**/}
        {/*</Table>*/}
        <Row gutter={3}  type="flex" justify="center">
          {/*{*/}
          {/*this.state.data.map((item, index) => (*/}
          {/*<ColTable columns={'this.state.columns'+index}*/}
          {/*dataSource={'this.state.data20'+index ? 'this.state.data20'+index: this.state.NoData}/>))*/}
          {/*}*/}
          <ColTable columns={this.state.columns1} dataSource={this.state.data201}/>
          <ColTable columns={this.state.columns2} dataSource={this.state.data202}/>
          <ColTable columns={this.state.columns3} dataSource={this.state.NoData}/>
          <ColTable columns={this.state.columns4} dataSource={this.state.data204}/>
          <ColTable columns={this.state.columns5} dataSource={this.state.NoData}/>
          <ColTable columns={this.state.columns6} dataSource={this.state.NoData}/>
          <ColTable columns={this.state.columns7} dataSource={this.state.NoData}/>
          <ColTable columns={this.state.columns8} dataSource={this.state.NoData}/>
          <ColTable columns={this.state.columns9} dataSource={this.state.NoData}/>
          <ColTable columns={this.state.columns10} dataSource={this.state.NoData}/>

          {/*<Col className="gutter-row" span={4}>*/}
            {/*<Table*/}
              {/*bordered*/}
              {/*pagination={false}*/}
              {/*columns={this.state.columns1}*/}
              {/*dataSource={this.state.data201}*/}
            {/*/>*/}
          {/*</Col>*/}
          {/*<Col className="gutter-row" span={4}>*/}
          {/*<Table*/}
          {/*bordered*/}
          {/*pagination={false}*/}
          {/*columns={this.state.columns2}*/}
          {/*dataSource={this.state.data202}*/}
          {/*/>*/}
          {/*</Col>*/}
          {/*<Col className="gutter-row" span={4}>*/}
          {/*<Table*/}
          {/*bordered*/}
          {/*pagination={false}*/}
          {/*columns={this.state.columns3}*/}
          {/*dataSource={this.state.NoData}*/}
          {/*/>*/}
          {/*</Col>*/}
          {/*<Col className="gutter-row" span={4}>*/}
          {/*<Table*/}
          {/*bordered*/}
          {/*pagination={false}*/}
          {/*columns={this.state.columns4}*/}
          {/*dataSource={this.state.data204}*/}
          {/*/>*/}
          {/*</Col>*/}
          {/*<Col className="gutter-row" span={4}>*/}
          {/*<Table*/}
          {/*bordered*/}
          {/*pagination={false}*/}
          {/*columns={this.state.columns5}*/}
          {/*dataSource={this.state.NoData}*/}
          {/*/>*/}
          {/*</Col>*/}
          {/*<Col className="gutter-row" span={4}>*/}
          {/*<Table*/}
          {/*bordered*/}
          {/*pagination={false}*/}
          {/*columns={this.state.columns6}*/}
          {/*dataSource={this.state.NoData}*/}
          {/*/>*/}
          {/*</Col>*/}
        </Row>
      </div>
    )
  }
}