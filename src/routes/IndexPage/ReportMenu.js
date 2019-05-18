/**
 * Created by think on 2017/7/18.
 */
import 'antd/dist/antd.css';
import React from 'react';
import {Row, Col, Menu, Icon} from 'antd';
import { Link } from 'react-router';
import style from './Report.less';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const secNav = [
  {"iClass": "图标名称1"},
  {"iClass": "图标名称2"},
  {"iClass": "图标名称3"},
  {"iClass": "图标名称4"},
  {"iClass": "图标名称5"},
];


const lists = [
  {
    title: "报表查询",
    id: "1",
  }, {
    title: "报表信息管理",
    id: "2",
    children: [
      {title: '信息查询', id: "21",},
      {title: '信息修改', id: "22",},
    ],
  }, {
    title: "报表录入及确认",
    id: "3",
    children: [
      {title: '专业风险', id: "31",},
      {title: '公司日报', id: "32",},
    ],
  },
  ];

class ReactMenu extends React.Component {

  state = {
    current: '1',
    openKeys: [],
    show: false
  };
  handleClicks = () => {
    this.setState({show: !this.state.show});
  };
  handleClick = (data) => {
    if(data.item.props.url){
      this.props.clickHandler(data.item.props.url);
    }
  };
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({openKeys: nextOpenKeys});
  };
  queryHand = () => {

  };
  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub3'],
    };
    return map[key] || [];
  };

  render() {
// const lists=[];
    var classString = 'DetabTil';
    if (this.state.show) {
      classString = classString + ' daily-shows';
    }
    var classStrings = 'SubTil';
    if (this.state.show) {
      classStrings = classStrings + ' daily-showes';
    }
    const loop = data => data.map((item) => {

      if (item.children && item.children.length > 0) {
        return (
          <SubMenu key={item.id}  title={item.title}>
            {loop(item.children)}
          </SubMenu>
        );
      }
      return (<Menu.Item className={classString} title={item.title} key={item.id}><span>{item.title}</span></Menu.Item>);
    });

    return (
      <div className={style.ReportMenu}>
        <Menu
          mode="inline"
          onClick={this.handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['1']}
          style={{width: "100%", color: "black", fontSize: "14px", margin: "10px 0 40px 0"}}
        >
          {loop(lists)}

        </Menu>
      </div>
    );
  }
}

export default ReactMenu;

