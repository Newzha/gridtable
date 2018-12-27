import React, {Component} from 'react'
import DateRange from '../train-editing-display/departure-date-time/departure-date-time'
import {Table, Button, Input, Icon } from 'antd';
import 'antd/dist/antd.css'
import './query-points.css'

// 输入框组件
const InPut = () => (
  <div className="example-input">
    <Input size="small" placeholder="" />
  </div>
)

export default class QueryPoints extends Component{
  constructor(props) {
    super(props)
    this.state = {
      columns : [{
        title: '顺',
        dataIndex: 'name',
        width: 90,
      }, {
        title: '车次',
        dataIndex: 'age',
        width: 90,
      }, {
        title: '到达时间',
        dataIndex: 'address',
        width: 90,
      }, {
        title: '股道名',
        dataIndex: 'address',
      }, {
        title: '方向',
        dataIndex: 'address',
      }, {
        title: '机车号',
        dataIndex: 'address',
      }, {
        title: '确认标志',
        dataIndex: 'address',
      }, {
        title: '篷布',
        dataIndex: 'address',
      }, {
        title: '列检',
        dataIndex: 'address',
      }, {
        title: '货检',
        dataIndex: 'address',
      }, {
        title: '车号',
        dataIndex: 'address',
      }],
      data : [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }]
    }
  }
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }
  render() {
    const {columns, data} = this.state
    return(
      <div>
        <div className="table-operations">
          <a onClick={this.setAgeSort}>
            <Icon type="redo"/>
            刷新
          </a>
          <div className="start-time"> 开始时间：<DateRange isStart={'start'}/></div>
          <div className="trains-number"> 查询车次：<InPut /></div>
          {/*<Button onClick={this.clearFilters}>Clear filters</Button>*/}
          {/*<Button onClick={this.clearAll}>Clear filters and sorters</Button>*/}
        </div>
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          title={() => '上行到达'}
          pagination={false}
          scroll={{x: 900}}
          bordered
        />
        <Table
          columns={columns}
          dataSource={data}
          size="middle"
          title={() => '上行出发'}
          pagination={false}
          scroll={{x: 900}}
          bordered
        />
      </div>
    )
  }
}