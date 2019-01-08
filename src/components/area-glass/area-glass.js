import React from 'react'

import {
  Menu, Dropdown, Button, Icon, message, Input, Tag, Breadcrumb, Card, List,
} from 'antd';
import 'antd/dist/antd.css'
// import './area-glass.css'
// import style from './area-glass.less'

const TrackLists = ({ data }) => (
  <List
    style={{ margin: '16px 0'}}
    size="small"
    // header={<div>Header</div>}
    // footer={<div>Footer</div>}
    bordered
    dataSource={data}
    renderItem={item => (
      <List.Item>{item}</List.Item>
    )}
  />
)
const TrackCards = (data) => (
  <Card
    // title={item.title}
  >
    {data}
  </Card>
)

export default class AreaGlass extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      arrow: true,
    }
  }

  handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  preventDefault = (e) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }
  render() {
    // 下拉菜单
    const menuAll = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">全部</Menu.Item>
        <Menu.Item key="2">上行</Menu.Item>
        <Menu.Item key="3">下行</Menu.Item>
      </Menu>
    );
    const menuArea = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">全部</Menu.Item>
        <Menu.Item key="2">集运端</Menu.Item>
        <Menu.Item key="3">疏运端</Menu.Item>
      </Menu>
    );
    const menuModel = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">实际场</Menu.Item>
        <Menu.Item key="2">计划场</Menu.Item>
        <Menu.Item key="3">推流场</Menu.Item>
      </Menu>
    );
    // 箭头指向
    const ARROW = this.state.arrow? <Icon type="right" /> : <Icon type="left" />;
    const detailsData = [{
      one: '80121(武汉->)  50 69.2  5071'},
      {one: '吉安/20烟煤 荆州/20褐煤 C80/10'
    }];
    const data = [
      {
        title: 'Title 1',
      },
      {
        title: 'Title 2',
      },
      {
        title: 'Title 3',
      },
      {
        title: 'Title 4',
      },
    ];
    const data0 = [
      "浩勒报吉以北",
    ]
    return (
      <div>
        <Card>
          <div className="top">
            <Dropdown.Button
              style={{ marginLeft: 8 }}
              placement="bottomRight"
              onClick={this.handleButtonClick} overlay={menuAll}>
              全部
            </Dropdown.Button>
            <Dropdown overlay={menuArea} trigger={['click']}>
              <Button style={{ marginLeft: 8 }}>
                分区 <Icon type="down" />
              </Button>
            </Dropdown>
            <Dropdown overlay={menuModel}>
              <a className="ant-dropdown-link" style={{ marginLeft: 8 }} >
                模式 <Icon type="down" />
              </a>
            </Dropdown>
            <Button style={{ marginLeft: 8 }}>
              搜索 <Icon type="search" />
            </Button>
            {/*<Input.Search*/}
            {/*style={{display: "inline-block"}}*/}
            {/*placeholder="搜索..."*/}
            {/*onSearch={value => console.log(value)}*/}
            {/*enterButton*/}
            {/*/>*/}
          </div>
          <div className="content" style={{ marginTop: 60, marginLeft: 8 }}>
            {/*<div className="contentName">*/}
            {/*<Tag color="#237804"*/}
            {/*onClose={this.preventDefault}>*/}
            {/*浩勒报吉以北*/}
            {/*</Tag>*/}
            {/*{ARROW}*/}
            {/*<Tag color="#36cfc9">浩勒报吉</Tag>*/}
            {/*{ARROW}*/}
            {/*<Tag color="#237804">浩勒报吉*靖边</Tag>*/}
            {/*{ARROW}*/}
            {/*<Tag color="#237804">靖神线</Tag>*/}
            {/*{ARROW}*/}
            {/*<Tag color="#36cfc9">靖边线</Tag>*/}
            {/*/!*<Breadcrumb separator="-->">*/}
            {/*<Breadcrumb.Item>*/}
            {/*<Tag color="#237804">浩勒报吉以北</Tag>*/}
            {/*</Breadcrumb.Item>*/}
            {/*<Breadcrumb.Item >*/}
            {/*<Tag color="#36cfc9">浩勒报吉</Tag>*/}
            {/*</Breadcrumb.Item>*/}
            {/*<Breadcrumb.Item>*/}
            {/*<Tag color="#237804">浩勒报吉*靖边</Tag>*/}
            {/*</Breadcrumb.Item>*/}
            {/*<Breadcrumb.Item>*/}
            {/*<Tag color="#237804">靖神线</Tag>*/}
            {/*</Breadcrumb.Item>*/}
            {/*<Breadcrumb.Item>*/}
            {/*<Tag color="#36cfc9">靖边线</Tag>*/}
            {/*</Breadcrumb.Item>*/}
            {/*</Breadcrumb>*!/*/}
            {/*</div>*/}
            {/*<div className="contentText">*/}
            {/*<Tag color="#237804">浩勒报吉以北</Tag>*/}
            {/*<Tag color="#36cfc9">浩勒报吉</Tag>*/}
            {/*<Tag color="#237804">浩勒报吉*靖边</Tag>*/}
            {/*<Tag color="#237804">靖神线</Tag>*/}
            {/*<Tag color="#36cfc9">靖边线</Tag>*/}
            {/*</div>*/}
            <List
              style={{ background: '#f5f5f5', padding: '30px' }}
              // bordered
              grid={{ gutter: 16, column: 4 }}
              dataSource={data}
              renderItem={item => (
                <List.Item
                >
                  {/*<Card style={{ width: 310 #237804  #ECECEC #f5f5f5}}>*/}
                  {/*<div className="contentName" style= {{background: "#237804"}}>*/}
                  {/*<TrackDetils data={ data0 } />*/}
                  <Tag color="#237804">浩勒报吉以北</Tag>
                  {/*</div>*/}
                  {ARROW}
                  <div className="contentText">
                    {/*{*/}
                    {/*data1.map(d => (*/}
                    {/*<TrackDetils data={ data1 }/>*/}
                    {/*))*/}
                    {/*}*/}
                    <Tag color="#237804">浩勒报吉以北</Tag>
                  </div>
                  <div className="contentDetails">
                    {/*{*/}
                    {/*data2.map(d => (*/}
                    {/*<TrackLists data={ data2 }/>*/}
                    {/*))*/}
                    {/*}*/}
                    {/*<TrackCards data={data2}/>*/}
                    {/*detailsData.map(d => (*/}
                       {/*<Card key={item.one}>{item.one}</Card>*/}
                    {/*))*/}
                    <Card >80121(武汉->)  50 69.2  5071</Card>
                    <Card >吉安/20烟煤 荆州/20褐煤 C80/10</Card>
                    {/*<Card >{detailsData.two}</Card>*/}
                  </div>
                  {/*</Card>*/}
                </List.Item>
              )}
            />

          </div>
        </Card>
      </div>
    )
    const data1 = [
      "浩勒报吉以北"
    ]
    const data2 = [
     '80121(武汉->)  50 69.2  5071',
     '吉安/20烟煤 荆州/20褐煤 C80/10',
    ];
  }
}