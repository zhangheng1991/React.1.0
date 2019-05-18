import React from 'react';
import {Col } from 'antd';
import ReportMenu from './ReportMenu';
class ReportManagement extends React.Component{
  render(){
    return(
      <div>
        <Col span={4}>
          <ReportMenu />
        </Col>
        <Col span={20}>
          {this.props.children}
        </Col>
      </div>
    )
  }
}
export default ReportManagement;
