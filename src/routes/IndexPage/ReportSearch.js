import React from 'react';
import {Col ,Tabs,Input} from 'antd';
const TabPane = Tabs.TabPane;
const Search = Input.Search;
import style from './Report.less';
class ReportSearch extends React.Component{
  callback=(key)=> {
    console.log(key);
  }
  render(){
    return(
      <div className={style.ReportSearch}>
        <Col span={24}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="全部列表" key="1">我的列表</TabPane>
            <TabPane  tab="公司日报" key="2">公司日报</TabPane>
          </Tabs>
        </Col>
        <Col span={5} style={{position:'fixed',marginLeft:'300px',height:'40px',lineHeight:'30px'}}>
          <Col span={4} style={{textAlign:"right",right:'10px'}}>搜索</Col>
          <Col span={20}>
            <Search
              placeholder="请输入报表名称"
              onSearch={value => console.log(value)}
              style={{ width: 200 ,height:'26px'}}

            />
          </Col>
        </Col>
        <Col style={{position:'fixed',right:'100px'}}>
          <span>ss</span>
          <span>衰</span>
        </Col>
      </div>
    )
  }
}

export default ReportSearch;
