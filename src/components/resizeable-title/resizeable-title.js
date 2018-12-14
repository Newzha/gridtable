/*
* 可伸缩列组件，实现拖动表头改变该列的宽度
* */
import React,{Component} from 'react'
import { Table } from 'antd';
import { Resizable } from 'react-resizable';

import 'antd/dist/antd.css'
import './resizeable-title.css'
// 表头宽度发生变化时返回变化后的表头单元格
const ResizeableTitle = (props) => {
  const { onResize, width, ...restProps } = props;
  if (!width) {
    return <th {...restProps} />;
  }
  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

export  default class ResizeTitle extends Component {

  state = {
    columns: [{
      title: 'Date',
      dataIndex: 'date',
      width: 200,
    }, {
      title: 'Amount',
      dataIndex: 'amount',
      width: 100,
    }, {
      title: 'Type',
      dataIndex: 'type',
      width: 100,
    }, {
      title: 'Note',
      dataIndex: 'note',
      width: 100,
    }, {
      title: 'Action',
      key: 'action',
      render: () => (
        <a href="javascript:;">Delete</a>
      ),
    }],
    data : [{
      key: 0,
      date: '2018-02-11',
      amount: 120,
      type: 'income',
      note: 'transfer',
    }, {
      key: 1,
      date: '2018-03-11',
      amount: 243,
      type: 'income',
      note: 'transfer',
    }, {
      key: 2,
      date: '2018-04-11',
      amount: 98,
      type: 'income',
      note: 'transfer',
    }]
  };

  // 更新表格列的width数据，并返回一个新的列数据
  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width,
      };
      return { columns: nextColumns };
    });
  };

  render() {
    // 对原始的列数据进行遍历添加头部单元格的handleResize方法
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));
    // table的头部单元格设置属性
    const components = {
      header: {
        cell: ResizeableTitle,
      },
    };
    return (
      <Table
        bordered  // 展示外边框和列边框
        components={components}  // 覆盖默认的 table 元素
        columns={columns}  // 表格列的配置
        dataSource={this.state.data}  // 数据数组
      />
    );
  }
}
