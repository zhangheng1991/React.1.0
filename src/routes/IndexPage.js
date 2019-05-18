import React from 'react';
import { connect } from 'dva';
import { Icon,Button } from 'antd';
import styles from '../components/public/public.less';
import Header from '../components/public/Header';
import Bottom from '../components/public/Bottom';
import IndexPage1 from './IndexPage1';
import {Link } from 'react-router';
import { Tabs,DatePicker } from 'antd';
import { Table } from 'antd';
const {  MonthPicker, RangePicker, WeekPicker} = DatePicker;
import $ from 'jquery';
const TabPane = Tabs.TabPane;
import ReportMenu from './IndexPage/ReportMenu'
import ReportSearch from './IndexPage/ReportSearch';
import IndexForm from './IndexForm';
import IndexForms from './IndexForms';
import {Col } from 'antd';

class IndexPage extends React.Component{
  submit=()=>{
   const {validateFields}=this.refs.krForm;
    validateFields(( err,value)=>{
      console.log(value)
    })
  }
  clear=()=>{
    const { resetFields }=this.refs.krForm;
    this.refs.krForm.resetFields();
  }
  render(){
    return(
      <div style={{background:"#e9e9e9"}}>
        <Col span={4}>
          <ReportMenu />
        </Col>
        <Col span={20}>
         <ReportSearch />
        <div style={{padding:"20px"}}>
          <Icon type="caret-down" />
          <div>
            表单和按钮在同一个页面
            <IndexForm />
          </div>
          <div>
            表单和按钮不在同一个页面
            <IndexForms ref="krForm" />
            <Button type="primary" onClick={this.submit}>
              Submit
            </Button>
            <Button type="primary" onClick={this.clear}>
              清空
            </Button>
          </div>
        </div>
        </Col>
      </div>
    )
  }
}
export default connect()(IndexPage);
