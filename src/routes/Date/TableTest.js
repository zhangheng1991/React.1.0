/**
 * Created by zhangheng on 2019/4/1.
 */
import React from 'react';
import { Table,Tag } from 'antd';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;



const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];
class TableTest extends React.Component{
  onChange=(pagination, filters, sorter)=>{
  console.log('params', pagination, filters, sorter);
}
  state = {
    value: 1,
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render(){
    return(
      <div>

        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
        {
          (this.state.value==2)&&(
            <div>zczdfsdf</div>
          )
        }
        <Table dataSource={dataSource} columns={columns} onChange={this.onChange} />
        asfas
      </div>
    )
  }
}

export default TableTest;

