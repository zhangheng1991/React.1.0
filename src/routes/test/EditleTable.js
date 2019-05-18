import React from 'react';
import { Table,Button } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  spaecial:"1",
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  spaecial:"1",
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  spaecial:"1",
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
  spaecial:"1",
}, {
  key: '5',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  spaecial:"1",
}, {
  key: '6',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  spaecial:"1",
}, {
  key: '7',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
  spaecial:"1",
}];


class EditleTable extends React.Component{
  state={
    show:false,

  }
  onChange=()=>{
    this.setState({show:true})
  }
  onChanged=()=>{
    this.setState({show:false})
  }
  onSelect=(record, selected, selectedRows, nativeEvent)=>{
    console.log(record)
    console.log(selected)
    console.log(selectedRows)
    console.log(nativeEvent)
  }
  onSelectAll=(selected, selectedRows, changeRows)=>{
    console.log(selected)
    console.log(selectedRows)
    console.log(changeRows)
  }
  onSelectInvert=(selectedRows)=>{
    console.log(selectedRows)
  }
  render(){
    const rowSelection={
      onChange: (selectedRowKeys, selectedRows) => {
        //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        console.log(selectedRowKeys)
        console.log(selectedRows)
      },
      getCheckboxProps: record => ({
        disabled:((this.state.show==true)?(record.spaecial === '1'):'') , // Column configuration not to be checked
        spaecial: record.spaecial,
      }),
      columnWidth:"200px",
      // columnTitle:"测试"
      fixed:"left",
      // 按钮选择：radio，单选框；"checkbox，复选框
      type:"checkbox",
      onSelect:this.onSelect,
      onSelectAll:this.onSelectAll,
      onSelectInvert:this.onSelectInvert,
    }
    const Column={
      //ascend' | 'descend'
      defaultSortOrder: 'descend',
      filtered:false,
    }
    return(
      <div>
        <span>表格</span>
        <Button onClick={this.onChange}>点击</Button>
        <Button onClick={this.onChanged}>点击1</Button>
        <Table
          hideDefaultSelections="true"
          rowSelection={rowSelection}
          columns={columns} dataSource={data}
          Column={Column}
          scroll={{ y: 240 }}
        />
       测试
      </div>
    )
  }
}

export default EditleTable;
