import React, {Component} from 'react'
import { Table, Input, Button, Popconfirm, Form, Select } from 'antd';

import 'antd/dist/antd.css'
import './test.css'

const FormItem = Form.Item;
// 创建上下文
const EditableContext = React.createContext();
// 在父组件使用Provider提供数据，可以在子组件任何位置使用Consumer拿到数据
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);
// 使EditableRow接收到一个props.form，props.form下的一系列方法可写出具备自动校验功能的表单
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends Component {
  state = {
    editing: false,
  }

  componentDidMount() {
    if (this.props.editable) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  componentWillUnmount() {
    if (this.props.editable) {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }
  // 触发当前单元格可编辑
  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      // if (editing) {
      //   this.input.focus(); // 当前单元格输入聚焦
      // }
    });
  }
  // 给添加了事件监听的可编辑列 添加点击其他区域保存数据事件
  handleClickOutside = (e) => {
    const { editing } = this.state;
    // 当前单元格处于可编辑状态 && 不等于点击的目标事件 && 当前单元格不包含目标事件 保存
    if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
      this.save();
    }
  }
  // 点击单元格输入数据验证和保存
  save = () => {
    const { record, handleSave } = this.props;
    // 验证表单
    this.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  }
  handleChange =(e) => {
    console.log(`Select.Option ${e}`);
    console.log("12123")
  }
  render() {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;
    return (
      <td ref={node => (this.cell = node)} {...restProps}>
        {editable ? ( // 给添加有editable属性的列渲染可编辑单元格
          <EditableContext.Consumer>
            {(form) => {
              this.form = form;
              return (
                editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {/*// getFieldDecorator(id,{ })方法来包装一个Input输入框组件，
                    //传入的第一个参数表示这个字段的Id，第二个参数是一个配置对象，这里设置表单控件的校验规则rules*/}
                    {form.getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true, // 必填项
                        message: `${title} is required.`, // 规则提示
                      }],
                      initialValue: record[dataIndex],
                    })(
                      <Select style={{ width: 120 }} onChange={e => this.handleChange(e.target.value)}>
                        <Select.Option value="jack" >Jack</Select.Option>
                        <Select.Option value="lucy" >Lucy</Select.Option>
                        <Select.Option value="disabled" >Disabled</Select.Option>
                        <Select.Option value="Yiminghe" >yiminghe</Select.Option>
                      </Select>
                    )}
                  </FormItem>
                ) : (
                  <div
                    className="editable-cell-value-wrap"
                    style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit} // 点击当前单元格触发可编辑状态 editing为true
                  >
                    {restProps.children}
                  </div>
                )
              );
            }}
          </EditableContext.Consumer>
        ) : restProps.children}
      </td>
    );
  }
}

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'name',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    }, {
      title: 'age',
      dataIndex: 'age',
    }, {
      title: 'address',
      dataIndex: 'address',
    }, {
      title: 'operation',
      dataIndex: 'operation',
      //text表示本项内容对应的value，record的值是一个object，里面存放了这一行数据的内容，index表示当行索引
      render: (text, record) => {
        // 给当前列（列有数据时）渲染事件，确认删除调用删除方法，Cancel无动作
        return (
          this.state.dataSource.length >= 1
            ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                <a href="javascript:;">Delete</a>
              </Popconfirm>
            ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
      }, {
        key: '1',
        name: 'Edward King 1',
        age: '32',
        address: 'London, Park Lane no. 1',
      }],
      count: 2,
    };
  }
  // 删除当前行
  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    // 将原数组中不等于当前行的数据留下来并更新数据
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  // 增加一行数据
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  // 保存当前行发生改变的数据
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  }

  render() {
    // debugger
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    // 遍历columns中的数据，给添加了editable属性的列绑定handleSave事件
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

// ReactDOM.render(<EditableTable />, mountNode);