/**
 * Created by zhangheng on 2019/4/1.
 */
import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import moment from 'moment';
const dateFormat = 'YYYY-MM-DD';
const defaultSelectDate = {
  startDate:moment().startOf('day').subtract(2, 'days'),
  endDate:moment().endOf('day').subtract(1, 'days')
};
import { Tree } from 'antd';

const { TreeNode } = Tree;
class Date extends  React.Component{
  state={
    startDate:moment().format("YYYYMMDD"),
    endDate:moment().format("YYYYMMDD"),
    current: 'mail',
  }

  handleClick = (e) => {
    // console.log(moment().subtract(1,"days").format("YYYYMMDD"))
    // console.log(moment().subtract(1,"week").format("YYYYMMDD"))
    // console.log(moment().subtract(1,"month").format("YYYYMMDD"))
    // console.log(moment().subtract(1,"year").format("YYYYMMDD"))
    // console.log(moment().startOf('day').format("YYYYMMDD"))
    // console.log(moment().startOf('week').format("YYYYMMDD"))
    // console.log(moment().startOf('month').format("YYYYMMDD"))
    // console.log(moment().startOf('year').format("YYYYMMDD"))
    console.log(e.key);

    this.setState({
      current: e.key,
    });
  }
 onChange=(value, dateString)=> {
  console.log(value);
  console.log(dateString);
   this.setState({startDate:dateString[0],endDate:dateString[1]})

}

  onOk=(value)=> {
  console.log('onOk: ', value);
}
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }
  render(){

    return(
      <div>
        <Tree
          checkable
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0" >
              <TreeNode title="leaf" key="0-0-0-0" disabled />
              <TreeNode title="leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1-1">
              <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-1" />
            </TreeNode>
          </TreeNode>
        </Tree>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="today">
          今天
          </Menu.Item>
          <Menu.Item key="moring">
           明天
          </Menu.Item>
          <Menu.Item key="week">
          本周
          </Menu.Item>
        </Menu>
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD"
          placeholder={['开始日期', '结束日期']}
          onChange={this.onChange}
          onOk={this.onOk}
          value={[moment(this.state.startDate,"YYYYMMDD"),moment(this.state.endDate,"YYYYMMDD")]}
        />
sdfdssefsdfs

      </div>
    )
  }
}
export default Date;

