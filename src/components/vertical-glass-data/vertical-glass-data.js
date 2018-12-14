
import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Table } from 'antd';

export default class VerticalGlassData extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      columns : [
        {
          title: '顺位', width: 100, dataIndex: 'order', fixed: 'left',
          // defaultSortOrder: 'ascend',
          // sorter: (a, b) => a.order - b.order,
          // render: (text) => text == 0? "统计":text,

        },
        {
          title: '201', width: 100, dataIndex: 'address201',
          // defaultSortOrder: 'descend',
          // visibility: hidden;
          // sorter: (a, b) => a.address201 - b.address201,
          // sorter: (a, b) => console.log("a"+a.order, "b"+b.order),
          sorter: (a, b) => {
            if (a.address201 === undefined){
              a.address201 = " "
              // b.address202 = " "
              // return a.address202 - b.address202
              // return console.log(111)
              return a.address201.localeCompare(b.address201)
            } else if (b.address201 === undefined) {
              b.address201 = " "
              // return a.address202 - b.address202
              return a.address201.localeCompare(b.address201)
            } else if (a.address201 === undefined && b.address201 === undefined){
              return a.address201.localeCompare(b.address201)
            } else {
              return a.address201.localeCompare(b.address201)
            }
          },
          render: (text, record, index) => {
            return <label>{text}</label>;
          },
        },
        {
          title: '202', dataIndex: 'address202', width: 150,
          defaultSortOrder: 'descend',
          sorter: (a, b) => {
            if (a.address202 === undefined){
              a.address202 = " "
              // b.address202 = " "
              // return a.address202 - b.address202
              // return console.log(111)
              return a.address202.localeCompare(b.address202)
            } else if (b.address202 === undefined) {
              b.address202 = " "
              // return a.address202 - b.address202
              return a.address202.localeCompare(b.address202)
            } else {
              return a.address202.localeCompare(b.address202)
            }
          },
          // sorter: (a, b) => a.address202? "0":a.address202 - b.address202,
          // render: (text, record, index) => {
          //   const col= []
          //   if(text === undefined){
          //     col.push(index)
          //     // console.log("text"+text, "index"+index)
          //   }
          //   console.log(col)
          //   // console.log("text"+text,"record"+record,"index"+index);
          //   return text;
          // }
          // render: (text, record, index) => {
          //   return <label>{text}</label>;
          // },
        },
        {
          title: '203', dataIndex: 'address203', width: 150,
        },
        {
          title: '204', dataIndex: 'address204', width: 150,
        },
        {
          title: '205', dataIndex: 'address205', width: 150,
        },
        {
          title: '206', dataIndex: 'address206', width: 150,
        },
        {
          title: '207', dataIndex: 'address207', width: 150,
        },
        {
          title: '208', dataIndex: 'address208', width: 150,
        },
        { title: '209', dataIndex: 'address209',},
        {
          title: '210', key: 'operation210', width: 100,
          render: () => <a href="javascript:;">action</a>,
        },
      ],
      data : [{
        key: '1',
        order: '1',
        // address201: 'B1001201',
        address203: 'B1001203',
        address205: 'B1001205',
      }, {
        key: '2',
        order: '2',
        // address201: 'C1002201',
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
    }
  };
  render() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        order: `${i}`,
        address: `London Park no. ${i}`,
      });
    };
    return(
      <div>
        <Table
          bordered
          pagination={false}
          columns={this.state.columns}
          dataSource={this.state.data}
          scroll={{ x: 1500, y: 300 }} />

      </div>
    )
  }

}



// ReactDOM.render(<Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />, document.getElementById('container'));
