import React from 'react';
import { connect } from 'dva';
import styles from '../components/public/public.less';
import Header from '../components/public/Header';
import Bottom from '../components/public/Bottom';
import {Link } from 'react-router';
import { Tabs } from 'antd';

import $ from 'jquery';
const TabPane = Tabs.TabPane;
class IndexPage extends React.Component{
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: <div>sdfsdfdsf</div>, key: '1', closable: true },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' , closable: true},
      { title: 'Tab 3', content: 'Content of Tab 333', key: '3', closable: true },
  ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {

    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove = (targetKey) => {
    console.log(targetKey)
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }
  shoWcontent=(pane)=>{
    if(pane.key ==1){
      return(
        <div>
         测试
        </div>
      )
    }
    if(pane.key ==2){
      return(
        <div>
          环境
        </div>
      )
    }
    if(pane.key ==3){
      return(
        <div>
          测试环境
        </div>
      )
    }

  }
  onHandClick=()=>{
   // location.reload();//页面刷新
    $("#autore").load("#autore");//局部刷新div容器
  }
  render(){
    return(
      <div>
        <div className={styles.container} id="autore">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >

            {this.state.panes.map((pane ,index)=>{
              var TabMenu = null;
              return(
                <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{this.shoWcontent.call(this,pane)}</TabPane>
              )
              console.log(343434)
            }

            )}
          </Tabs>
        </div>

      </div>
    )
  }
}

export default connect()(IndexPage);
